import {
  START_LOADING_RESTAURANTS,
  START_LOADING_RESTAURANT,
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from "../actions/restaurant_actions";
import {
  START_LOADING_RESERVATIONS,
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION_ERRORS
} from "../actions/reservations_actions";

const initialState = {
  loading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_RESTAURANT:
    case START_LOADING_RESTAURANTS:
    case START_LOADING_RESERVATIONS:
      return Object.assign({}, state, { loading: true });
    case RECEIVE_RESTAURANT:
    case RECEIVE_RESTAURANTS:
    case RECEIVE_RESTAURANT_ERRORS:
      return initialState;
    default:
      return state;
  }
};

export default loadingReducer;
