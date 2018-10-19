import { merge } from "lodash";
import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION_ERRORS
} from "./../actions/reservations_actions";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return merge({}, state, action.reservation);
    case RECEIVE_RESERVATION:
      return merge({}, state, { [action.reservation.id]: action.reservation });
    case RECEIVE_RESERVATION_ERRORS:
      return state;
    default:
      return state;
  }
};

export default reservationsReducer;
