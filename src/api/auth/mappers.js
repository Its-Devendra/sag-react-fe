/**
 * Google login request mapper.
 * @param {GoogleLoginResponse}
 * @returns {GoogleLoginResponseObject}
 */
export const googleLoginResponseMapper = (responseData) => {
  return {
    accessToken: responseData['access_token'],
    refreshToken: responseData['refresh_token'],
  };
};
