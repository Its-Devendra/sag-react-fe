import { useQuery } from 'react-query';
import api from '../api';
import { loggedInUserInfoResponseMapper } from './mappers';

// Api.
/**
 * Send Google Login request
 * @return {LoggedInUserInfo}
 */
export const getLoggedInUserInfoRequest = async () => {
  const response = await api.get('/user/info/');
  return loggedInUserInfoResponseMapper(response.data);
};

// Hooks.
export const userLoggedInUserInfo = (enabled) =>
  useQuery('/user/info', {
    enabled,
    queryFn: getLoggedInUserInfoRequest,
    cacheTime: 0,
  });
