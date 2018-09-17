import React from 'react';
// import defaultThumbnail from './../../../app/assets/images/default_images/default_rest_thumbnail.png';

const RestaurantIndexItem = ({restaurant}) => {
  // debugger

  return (
    <li className='restaurant_index_item'>
      <img className='restaurant_index_item_thumbnail' src={window.staticImages.defaultRestaurant} />
      <div>
        <h3>
          {restaurant.restaurant_name}
        </h3>
          {restaurant.restaurant_description}
      </div>
    </li>
  );
}

// trying to include image:
      // <img src={defaultThumbnail} />

export default RestaurantIndexItem;
