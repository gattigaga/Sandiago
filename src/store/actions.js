export const SET_USER_SESSION = "SET_USER_SESSION";
export const ADD_ACCOUNT = "ADD_ACCOUNT";

/**
 * Get action to set user session
 *
 * @param {object} user User session
 */
export const setUserSession = user => ({
  type: SET_USER_SESSION,
  payload: user
});

/**
 * Get action to add account
 *
 * @param {object} account User account
 */
export const addAccount = account => ({
  type: ADD_ACCOUNT,
  payload: account
});
