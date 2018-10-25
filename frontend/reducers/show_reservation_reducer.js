import {
  SHOW_RESERVATION,
  CLEAR_RESERVATION
} from "./../actions/reservation_show_actions";

const showReservationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_RESERVATION:
      return action.reservation;
    case CLEAR_RESERVATION:
      return null;
    default:
      return state;
  }
};

export default showReservationReducer;
