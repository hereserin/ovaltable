import { merge } from "lodash";
import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION_ERRORS
} from "./../actions/reservations_actions";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "./../actions/session_actions";

const initialState = {};

const reservationsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.reservations);
    case LOGOUT_CURRENT_USER:
      return null;
    case RECEIVE_RESERVATION:
      return merge({}, state, { [action.reservation.id]: action.reservation });
    case RECEIVE_RESERVATION_ERRORS:
      return state;
    default:
      return state;
  }
};

export default reservationsReducer;
