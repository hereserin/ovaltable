import React from "react";
import ShowStarRating from "./show_star_rating";
import { deleteReview } from "./../../actions/reviews_actions";
import { connect } from "react-redux";

const ReviewIndexItem = props => {
  const userInitials = props.reviewAuthor.username
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();

  let deleteReviewButton;
  if (props.currentUserId === props.reviewAuthor.id) {
    deleteReviewButton = (
      <span
        className="delete-review-button"
        onClick={() => {
          props.deleteReview(props.review.id, props.review.restaurant_id);
        }}
      >
        Delete
      </span>
    );
  }
  return (
    <div className="review-item-holder">
      <div className="review-item">
        <span className="review-user-info">
          <div className="user-initials-container">
            <i className="fas fa-circle" />
            <p className="user-initials">{userInitials}</p>
          </div>
          <p>{props.reviewAuthor.username}</p>
        </span>
        <span className="review-item-content">
          <ShowStarRating
            numberOfStars={props.review.rating_overall}
            colorInRed={true}
          />
          <p>{props.review.review_body}</p>
        </span>
      </div>
      {deleteReviewButton}
    </div>
  );
};

const mapStateToProps = ({ entities, session }, ownProps) => ({
  reviewAuthor: entities.users[ownProps.review.user_id],
  currentUserId: session.id
});

const mapDispatchToProps = dispatch => ({
  deleteReview: (id, restId) => dispatch(deleteReview(id, restId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndexItem);
