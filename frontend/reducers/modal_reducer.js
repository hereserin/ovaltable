import { OPEN_MODAL, CLOSE_MODAL } from "./../actions/modal_actions";
import { RECEIVE_CURRENT_USER } from "./../actions/session_actions";

const initialState = [];

const modalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
