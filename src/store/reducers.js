import { SET_USER_SESSION } from "./actions";

// Authenticated user session
export const userSession = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_SESSION:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
