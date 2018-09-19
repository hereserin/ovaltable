import React from 'react';
import RestaurantShowHoursOfOperation from './../../hours_of_operation/restaurant_show_hours_of_operation';
import MakeReservationForm from './../../reservations/make_reservation_form';

const RestaurantInfo = ({restaurant, hours}) => {


  // debugger
  return (
    <section>
      <ul className='restaurant-description'>
        <li>
          <h1>{restaurant.restaurant_name}</h1>
        </li>
        <li>
          <p>{restaurant.restaurant_description}</p>
        </li>
      </ul>

      <section className='restaurant-info-section'>
        <ul className='restaurant-info-list'>
          <li>
            <ul className='rest-details-list-1'>
              <li>
                <h3>Dining Style</h3>
                {restaurant.dining_style_id}
              </li>
              <li>
                <h3>Hours Of Operation</h3>
                <RestaurantShowHoursOfOperation restaurantHoursIds={restaurant.hours_of_operation_ids} hours={hours} />
              </li>
              <li>
                <h3>Phone Number</h3>
                {restaurant.phone}
              </li>
              <li>
                <h3>Website</h3>
                {restaurant.website_url}
              </li>
              <li>
                <h3>Dress Code</h3>
                {restaurant.dress_code_id}
              </li>
            </ul>
          </li>

          <li>
            <ul className='rest-details-list-2'>
              <li>
                <h3>Location</h3>
                {restaurant.physical_address}
              </li>
            </ul>
          </li>
        </ul>
      </section>


    </section>
  );
};

export default RestaurantInfo;
