/**
 * Google login request mapper.
 * @param {GoogleLoginResponse}
 * @returns {GoogleLoginResponseObject}
 */
export const googleLoginResponseMapper = (response) => {
  return {
    accessToken: response['access_token'],
    refreshToken: response['refresh_token'],
  };
};
