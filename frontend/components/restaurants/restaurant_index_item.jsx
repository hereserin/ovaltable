import React from 'react';

const RestaurantIndexItem = (restaurant) => {
  return (
    <li>
      {restaurant.restaurant_name}: {restaurant.restaurant_description}
    </li>
  );
}

export default RestaurantIndexItem;
