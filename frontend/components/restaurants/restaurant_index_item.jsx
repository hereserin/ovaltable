import React from 'react';
// import defaultThumbnail from './../../../app/assets/images/default_images/default_rest_thumbnail.png';

const RestaurantIndexItem = ({restaurant}) => {
  return (
    <li>

      {restaurant.restaurant_name}: {restaurant.restaurant_description}
    </li>
  );
}

// trying to include image:
      // <img src={defaultThumbnail} />

export default RestaurantIndexItem;
