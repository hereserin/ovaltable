import { merge } from 'lodash';
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from './../actions/restaurant_actions';

const reviewsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return merge({}, state, action.reviews)
    case RECEIVE_RESTAURANT:
      return merge({}, state, action.reviews)
    default:
      return state;
  }
};

export default reviewsReducer;
