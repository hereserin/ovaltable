import React from "react";

const ShowStarRating = props => {
  let starClass = "review-stars-on-yellow";
  if (props.colorInRed) {
    starClass = "review-stars-on";
  }

  const stars = rating => {
    const one = (
      <div>
        <span className={starClass}>
          <i className="fa fa-star" aria-hidden="true" />
        </span>
        <span className="review-stars-off">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
      </div>
    );

    const two = (
      <div>
        <span className={starClass}>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
        <span className="review-stars-off">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
      </div>
    );

    const three = (
      <div>
        <span className={starClass}>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
        <span className="review-stars-off">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
      </div>
    );

    const four = (
      <div>
        <span className={starClass}>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
        <span className="review-stars-off">
          <i className="fa fa-star" aria-hidden="true" />
        </span>
      </div>
    );

    const five = (
      <div>
        <span className={starClass}>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
      </div>
    );

    const noRatingsYet = (
      <div>
        <span>
          <p className="no-ratings-yet">No Reviews Yet</p>
        </span>
      </div>
    );

    let starDiv;
    switch (rating) {
      case 1:
        starDiv = one;
        break;
      case 2:
        starDiv = two;
        break;
      case 3:
        starDiv = three;
        break;
      case 4:
        starDiv = four;
        break;
      case 5:
        starDiv = five;
        break;
      case null:
        starDiv = noRatingsYet;
        break;
      default:
        starDiv = five;
        break;
    }

    return starDiv;
  };

  return (
    <div>
      <div>{stars(props.numberOfStars)}</div>
    </div>
  );
};

export default ShowStarRating;
