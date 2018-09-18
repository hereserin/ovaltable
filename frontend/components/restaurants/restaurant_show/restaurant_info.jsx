import React from 'react'

const RestaurantInfo = (props) => {
  // debugger
  return (
    <ul>
      <li>
        This is where the Restaurant Information will go.
      </li>
      <li>
        <h1>{props.restaurant.restaurant_name}</h1>
      </li>
      <li>
        <p>{props.restaurant.restaurant_description}</p>
      </li>
    </ul>
  );
};

export default RestaurantInfo;
