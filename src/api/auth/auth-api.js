import { useMutation } from 'react-query';
import api from '../api';
import { googleLoginResponseMapper } from './mappers';

// Api.
/**
 * Send Google Login request
 * @param {GoogleLoginPayload}
 * @return {GoogleLoginResponseObject}
 */
export const googleLoginRequest = async ({ authCode }) => {
  const response = await api.post('/user/google-login/', {
    auth_code: authCode,
  });
  return googleLoginResponseMapper(response.data);
};

export const logoutRequest = async (payload) =>
  await api.post('/user/logout/', payload);

// Hooks.
export const useGoogleLoginRequest = () =>
  useMutation(async (payload) => googleLoginRequest(payload));

export const useLogoutRequest = () =>
  useMutation(async (payload) => logoutRequest(payload));
