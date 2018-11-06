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
      <span
        className="delete-review-button"
        onClick={() => {
          props.deleteReview(props.review.id, props.review.restaurant_id);
        }}
      >
        Delete
      </span>
    </div>
  );
};

const mapStateToProps = ({ entities }, ownProps) => ({
  reviewAuthor: entities.users[ownProps.review.user_id]
});

const mapDispatchToProps = dispatch => ({
  deleteReview: (id, restId) => dispatch(deleteReview(id, restId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndexItem);
