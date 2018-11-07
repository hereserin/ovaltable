import { merge } from "lodash";
import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from "./../actions/restaurant_actions";
import { RECEIVE_REVIEW, DELETE_REVIEW } from "./../actions/reviews_actions";
import { RECEIVE_PHOTO, DELETE_PHOTO } from "./../actions/photos_actions";
import { RECEIVE_RESERVATIONS } from "./../actions/reservations_actions";

const initialState = {};

const restaurantsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
    case RECEIVE_RESERVATIONS:
      return merge({}, state, action.restaurants);
    case RECEIVE_RESTAURANT:
      return merge({}, state, { [action.restaurant.id]: action.restaurant });
    case RECEIVE_REVIEW:
      const restId = Object.values(action.review)[0].restaurant_id;
      let newListOfReviews = state[restId].reviews;
      newListOfReviews.push(parseInt(Object.keys(action.review)[0]));
      return merge({}, state, { reviews: newListOfReviews });
    case DELETE_REVIEW:
      let newState = merge({}, state);
      const newReviewsArray = newState[action.restId].reviews.filter(
        reviewLookupId => {
          return reviewLookupId !== action.reviewId;
        }
      );
      newState[action.restId].reviews = newReviewsArray;
      return newState;
    case DELETE_PHOTO:
      let newState2 = merge({}, state);
      const newPhotosArray = newState2[action.restId].photos.filter(
        photoLookUpId => {
          return photoLookUpId !== action.photoId;
        }
      );
      newState2[action.restId].photos = newPhotosArray;
      return newState2;
    case RECEIVE_PHOTO:
      const restId2 = action.photo.restaurant_id;
      let newListOfPhotos = state[restId2].photos;
      newListOfPhotos.push(action.photo.id);
      return merge({}, state, { photos: newListOfPhotos });
    default:
      return state;
  }
};

export default restaurantsReducer;
