import axios from 'axios';
import { isUndefined } from 'lodash';
import { QueryClient } from 'react-query';
import { logout, TokenManager } from '../helpers';
import { ApiErrorType } from './enums';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
    ? import.meta.env.VITE_BACKEND_URL.toString()
    : undefined,
});

api.interceptors.request.use((req) => {
  if (TokenManager.getToken() && req.headers) {
    req.headers['Authorization'] = `Bearer ${TokenManager.getToken()}`;
  }
  return req;
});

api.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    let errorResponse;
    if (isCustomError(error)) {
      errorResponse = error.response.data;
      switch (errorResponse?.type) {
        case ApiErrorType.InvalidToken: {
          const refreshToken = TokenManager.getRefreshToken();
          if (!TokenManager.getToken() || !refreshToken) {
            logout();
          }
          break;
        }
      }
    }
    return Promise.reject(error);
  },
);

export const isCustomError = (error) =>
  // TODO: Fix this according to custom exception type.
  !isUndefined(error.response?.data?.type);

export const handleRefreshToken = async () => {
  try {
    const refreshToken = TokenManager.getRefreshToken();
    if (refreshToken) {
      const res = await api.post('/user/token/refresh/', {
        refresh: TokenManager.getRefreshToken(),
      });

      if (res.data?.access_token) {
        TokenManager.saveToken(res.data.access_token);
      }
    } else {
      logout();
    }
  } catch (e) {
    if (e.type === ApiErrorType.InvalidToken) {
      logout();
    }
  }
};

// React Query Configuration.
export const defaultQueryFn = async ({ queryKey }) => {
  const response = await api.get(
    `${import.meta.env.VITE_BACKEND_URL}${queryKey[0]}`,
  );
  return response;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      retry: (_, error) => {
        const err = error;
        if (err.type === ApiErrorType.InvalidToken) {
          handleRefreshToken();
          return true;
        }
        return false;
      },
      refetchOnWindowFocus: false,
      staleTime: 3000,
    },
    mutations: {
      retry: (_, error) => {
        const err = error;
        if (err.type === ApiErrorType.InvalidToken) {
          handleRefreshToken();
          return true;
        }
        return false;
      },
    },
  },
});

export default api;
