import React from 'react';

export const GlobalContext = React.createContext({
  /** @type {LoggedInUserInfo} */
  loggedInUser: null,
  /**
   * Sets logged-in user information.
   * @param {LoggedInUserInfo} loggedInUser
   */
  setLoggedInUser: () => {},
});
