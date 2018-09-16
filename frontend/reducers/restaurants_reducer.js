import { merge } from 'lodash';
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from './../actions/restaurant_actions';

const restaurantsReducer = (state= {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return merge({}, state, action.restaurants)
    case RECEIVE_RESTAURANT:
      return merge({}, state, {[action.restaurant.id]: action.restaurant});
    default:
      return state;
  }
};

export default restaurantsReducer;
