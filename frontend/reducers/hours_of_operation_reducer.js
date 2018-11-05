import { merge } from "lodash";
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS
} from "./../actions/restaurant_actions";

const initialState = {};

const hoursOfOperationReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
    case RECEIVE_RESTAURANT:
      return merge({}, state, action.hoursOfOperation);
    default:
      return state;
  }
};

export default hoursOfOperationReducer;
