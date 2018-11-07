import {
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_REVIEW
} from "./../actions/reviews_actions";

const initialState = {};

const reviewErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
      return initialState;
    default:
      return state;
  }
};

export default reviewErrorsReducer;
