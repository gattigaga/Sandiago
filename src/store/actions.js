export const SET_USER_SESSION = "SET_USER_SESSION";

/**
 * Get action to set user session
 *
 * @param {object} user User session
 */
export const setUserSession = user => ({
  type: SET_USER_SESSION,
  payload: user
});
