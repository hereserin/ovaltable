import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const submitReview = review => {
  return dispatch => {
    return ReviewAPIUtil.makeReview(review).then(
      review => {
        return dispatch(receiveReview(review));
      },
      error => {
        return dispatch(receiveReviewErrors(error));
      }
    );
  };
};

export const fetchReview = id => {
  return dispatch => {
    return ReviewAPIUtil.fetchReview(id).then(
      review => {
        return dispatch(receiveReview(review));
      },
      error => {
        return dispatch(receiveReviewErrors(error));
      }
    );
  };
};

export const deleteReview = id => {
  return dispatch => {
    return ReviewsAPIUtil.cancelReview(id).then(
      payload => {
        return dispatch(receiveReview(payload));
      },
      error => {
        return dispatch(receiveReviewErrors(error));
      }
    );
  };
};

const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review: review
  };
};

const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors: errors.responseJSON
  };
};
