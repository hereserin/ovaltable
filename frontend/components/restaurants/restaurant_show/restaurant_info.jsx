import React from 'react'

const RestaurantInfo = (props) => {


  // debugger
  return (
    <section>
      <ul className='restaurant-description'>
        <li>
          <h1>{props.restaurant.restaurant_name}</h1>
        </li>
        <li>
          <p>{props.restaurant.restaurant_description}</p>
        </li>
      </ul>
      <ul className='restaurant-info-list'>
        <li>
          <ul className='rest-details-list-1'>
            <li>
              <h3>Dining Style</h3>
              {props.restaurant.dining_style_id}
            </li>
            <li>
              <h3>Phone Number</h3>
              {props.restaurant.phone}
            </li>
            <li>
              <h3>Website</h3>
              {props.restaurant.website_url}
            </li>
            <li>
              <h3>Dress Code</h3>
              {props.restaurant.dress_code_id}
            </li>
          </ul>
        </li>
        <li>
          <ul className='rest-details-list-2'>
            <li>
              <h3>Locations</h3>
              {props.restaurant.physical_address}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default RestaurantInfo;
