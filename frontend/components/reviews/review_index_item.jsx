import React from "react";
import ShowStarRating from "./show_star_rating";
import { connect } from "react-redux";

const ReviewIndexItem = props => {
  return (
    <div>
      <div className="review-item">
        <span className="review-user-info">
          <p>{props.reviewAuthor.id}</p>
        </span>
        <span>
          <ShowStarRating
            numberOfStars={props.review.rating_overall}
            colorInRed={true}
          />
          <p>{props.review.review_body}</p>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ entities }, ownProps) => ({
  reviewAuthor: entities.users[ownProps.review.user_id]
});

export default connect(mapStateToProps)(ReviewIndexItem);
