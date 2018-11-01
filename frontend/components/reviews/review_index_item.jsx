import React from "react";
import ShowStarRating from "./show_star_rating";

const ReviewIndexItem = props => {
  return (
    <div>
      <div className="review-item">
        <ShowStarRating
          numberOfStars={props.review.rating_overall}
          colorInRed={true}
        />
        <p>{props.review.review_body}</p>
      </div>
    </div>
  );
};

export default ReviewIndexItem;
