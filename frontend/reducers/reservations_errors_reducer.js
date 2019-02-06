import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION_ERRORS
} from "./../actions/reservations_actions";

const initialState = [];

const reservationsErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    case RECEIVE_RESERVATION:
    case RECEIVE_RESERVATIONS:
      return initialState;
    default:
      return initialState;
  }
};

export default reservationsErrorsReducer;
