import { merge } from "lodash";
import { RECEIVE_REVIEW } from "./../actions/reviews_actions";
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS
} from "./../actions/restaurant_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
    case RECEIVE_RESTAURANT:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, action.review);
    default:
      return state;
  }
};

export default reviewsReducer;
