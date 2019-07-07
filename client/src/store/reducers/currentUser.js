import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false, //true when logged in
  user: {} //all user infro when logged in
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Object.keys(action.user).length > 0, //if empty = false, if there are keys = true
        user: action.user
      };
    default:
      return state;
  }
};
