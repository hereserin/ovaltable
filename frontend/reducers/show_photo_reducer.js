import { merge } from "lodash";
import { SHOW_PHOTO, CLEAR_PHOTO } from "./../actions/photo_show_actions";

const initialState = {};

const showPhotoReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_PHOTO:
      return merge({}, state, { photo: action.photo, author: action.author });
    case CLEAR_PHOTO:
      return null;
    default:
      return state;
  }
};

export default showPhotoReducer;
