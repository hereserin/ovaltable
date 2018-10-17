import React from "react";
import { withRouter } from "react-router-dom";

const RestaurantIndexItem = props => {
  // if(props. == 0) return <div></div>;

  const thumbId = props.restaurant.photos[0];
  let thumbnail = window.staticImages.defaultRestaurant;

  if (thumbId) {
    thumbnail = props.photos[thumbId].photoUrl;
  }
  // <img className="restaurant_index_item_thumbnail" src={thumbnail} />

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
        {props.restaurant.restaurant_description}
      </div>
    </li>
  );
};

export default withRouter(RestaurantIndexItem);
