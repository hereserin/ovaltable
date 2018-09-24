import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION_ERRORS
} from './../actions/reservations_actions';
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS
} from './../actions/restaurant_actions';

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
    case RECEIVE_RESTAURANT:
      return [];
    case RECEIVE_RESTAURANTS:
      return [];
    default:
      return state;
  }
};

export default reservationsErrorsReducer;
