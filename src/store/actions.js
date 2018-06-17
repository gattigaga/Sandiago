export const SET_USER_SESSION = "SET_USER_SESSION";
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const REMOVE_ACCOUNT = "REMOVE_ACCOUNT";
export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";

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

/**
 * Get action to remove account
 *
 * @param {string} accountID Account ID
 */
export const removeAccount = accountID => ({
  type: REMOVE_ACCOUNT,
  payload: accountID
});

/**
 * Get action to update account
 *
 * @param {string} accountID Account ID
 * @param {object} data New Data
 */
export const updateAccount = (accountID, data) => ({
  type: UPDATE_ACCOUNT,
  payload: {
    data,
    id: accountID
  }
});
