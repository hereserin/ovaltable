import React from 'react';
import RestaurantInfo from './restaurant_info';
import MakeReservationForm from './make_reservation_form';
import RestaurantPhotos from './restaurant_photos';
import ReviewIndex from './reviews_index';
import { withRouter } from 'react-router-dom';

const RestaurantShowPage = (props) => {
  
  return (
    <section>
      <p>"This is the Rest Show page"</p>
      <RestaurantInfo />
      <MakeReservationForm />
      <RestaurantPhotos />
      <ReviewIndex />
    </section>
  );
};

export default withRouter(RestaurantShowPage);
