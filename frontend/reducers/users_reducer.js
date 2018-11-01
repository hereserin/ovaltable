import { merge } from "lodash";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "./../actions/session_actions";
import { RECEIVE_RESTAURANT } from "./../actions/restaurant_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_RESTAURANT:
      return merge({}, state, action.users);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;
