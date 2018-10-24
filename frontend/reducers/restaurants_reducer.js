import { merge } from "lodash";
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from "./../actions/restaurant_actions";
import { RECEIVE_REVIEW } from "./../actions/reviews_actions";
import { RECEIVE_RESERVATIONS } from "./../actions/reservations_actions";

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return merge({}, state, action.restaurants);
    case RECEIVE_RESERVATIONS:
      return merge({}, state, action.restaurants);
    case RECEIVE_RESTAURANT:
      return merge({}, state, { [action.restaurant.id]: action.restaurant });
    case RECEIVE_REVIEW:
      const restId = Object.values(action.review)[0].restaurant_id;
      let newListOfReviews = state[restId].reviews;
      newListOfReviews.push(parseInt(Object.keys(action.review)[0]));
      debugger;
      return merge({}, state, { reviews: newListOfReviews });
    default:
      return state;
  }
};

export default restaurantsReducer;
