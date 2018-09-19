import React from 'react';
import RestaurantShowHoursOfOperation from './../../hours_of_operation/restaurant_show_hours_of_operation';
import MakeReservationForm from './../../reservations/make_reservation_form';

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

      <section className='restaurant-info-section'>
        <ul className='restaurant-info-list'>
          <li>
            <ul className='rest-details-list-1'>
              <li>
                <h3>Dining Style</h3>
                {props.restaurant.dining_style_id}
              </li>
              <li>
                <h3>Hours Of Operation</h3>
                <RestaurantShowHoursOfOperation restaurant={props.restaurant} />
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
                <h3>Location</h3>
                {props.restaurant.physical_address}
              </li>
            </ul>
          </li>
        </ul>
      </section>


    </section>
  );
};

export default RestaurantInfo;
