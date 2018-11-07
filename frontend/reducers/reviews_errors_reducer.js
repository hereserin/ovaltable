import {
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_REVIEW
} from "./../actions/reviews_actions";
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS
} from "./../actions/restaurant_actions";
import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS
} from "./../actions/reservations_actions";

const initialState = {};

const reviewErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
    case RECEIVE_RESTAURANT:
    case RECEIVE_RESTAURANTS:
    case RECEIVE_RESERVATION:
    case RECEIVE_RESERVATIONS:
      return initialState;
    default:
      return state;
  }
};

export default reviewErrorsReducer;
