import { merge } from "lodash";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "./../actions/session_actions";
import { RECEIVE_RESTAURANT } from "./../actions/restaurant_actions";
import { SHOW_PHOTO } from "./../actions/photo_show_actions";

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_RESTAURANT:
    case SHOW_PHOTO:
      return merge({}, state, action.users);
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default usersReducer;
