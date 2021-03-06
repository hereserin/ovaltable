import { merge } from "lodash";
import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  DELETE_PHOTO
} from "./../actions/photos_actions";
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from "./../actions/restaurant_actions";
import { RECEIVE_RESERVATIONS } from "./../actions/reservations_actions";

const initialState = {};

const photosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
    case RECEIVE_RESTAURANT:
    case RECEIVE_RESERVATIONS:
      return merge({}, state, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, { [action.photo.id]: action.photo });
    case DELETE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
