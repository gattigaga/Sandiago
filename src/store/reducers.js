import {
  SET_USER_SESSION,
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
  UPDATE_ACCOUNT
} from "./actions";

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

// Account list created by user
export const accounts = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ACCOUNT:
      return [...state, payload];

    case REMOVE_ACCOUNT:
      return state.filter(item => item.id !== payload);

    case UPDATE_ACCOUNT:
      return state.map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload.data
          };
        }

        return item;
      });

    default:
      return state;
  }
};
