import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
  // CLEAR_ERRORS
} from "./../actions/session_actions";
import { CLOSE_MODAL } from "./../actions/modal_actions";

const initialState = [];

const sessionErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
