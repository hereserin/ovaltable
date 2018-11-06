import React from "react";
import { withRouter } from "react-router-dom";
import ShowStarRating from "./../reviews/show_star_rating";

const RestaurantIndexItem = props => {
  let thumbnail;
  if (props.restaurant.photos && props.restaurant.photos.length > 0) {
    const thumbId = props.restaurant.photos[0];
    thumbnail = props.photos[thumbId].photoUrl;
  } else {
    thumbnail = window.staticImages.defaultRestaurant;
  }

  return (
    <li className="restaurant_index_item">
      <div className="restaurant-index-item-thumbnail-holder">
        <div
          className="restaurant-index-item-thumbnail"
          onClick={() => {
            props.history.push(`/restaurants/${props.restaurant.id}`);
          }}
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      </div>
      <div>
        <h3
          onClick={() => {
            props.history.push(`/restaurants/${props.restaurant.id}`);
          }}
        >
          {props.restaurant.restaurant_name}
        </h3>
        <ShowStarRating numberOfStars={props.restaurant.rating} />
        {props.restaurant.restaurant_description}
      </div>
    </li>
  );
};

export default withRouter(RestaurantIndexItem);
