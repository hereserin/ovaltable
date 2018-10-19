import { merge } from "lodash";
// import {
//   RECEIVE_PHOTO,
//   RECEIVE_PHOTOS,
// } from './../actions/photos_actions';
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from "./../actions/restaurant_actions";
import { RECEIVE_RESERVATIONS } from "./../actions/reservations_actions";

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return merge({}, state, action.photos);
    case RECEIVE_RESTAURANT:
      // return merge({}, state, {[action.photo.id]: action.photo});
      return merge({}, state, action.photos);
    case RECEIVE_RESERVATIONS:
      return merge({}, state, action.photos);
    default:
      return state;
  }
};

export default photosReducer;
