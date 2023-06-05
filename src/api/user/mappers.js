import { isNull } from 'lodash';

/**
 * Logged-in user info request response mapper.
 * @param {LoggedInUserInfoResponseData}
 * @returns {LoggedInUserInfo}
 */
export const loggedInUserInfoResponseMapper = (responseData) => {
  const { first_name: firstName, last_name: lastName } = responseData;

  const fullName = !isNull(lastName) ? `${firstName} ${lastName}` : firstName;

  return {
    id: responseData.id,
    email: responseData.email,
    lastLogin: responseData.last_login,
    isActive: responseData.is_active,
    firstName,
    lastName,
    fullName,
  };
};
