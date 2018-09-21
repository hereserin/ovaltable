import { merge } from 'lodash';
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from './../actions/restaurant_actions';

const hoursOfOperationReducer = (state= {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return merge({}, state, action.hoursOfOperation);
    case RECEIVE_RESTAURANT:
      return merge({}, state, action.hoursOfOperation);
    default:
      return state;
  }
};

export default hoursOfOperationReducer;
