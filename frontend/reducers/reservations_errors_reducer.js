import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION_ERRORS
} from './../actions/reservations_actions';

const reservationsErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS: 
      return action.errors;
    case RECEIVE_RESERVATION:
      return [];
    case RECEIVE_RESERVATIONS:
      return [];
    default:
      return state;
  }
};

export default reservationsErrorsReducer;
