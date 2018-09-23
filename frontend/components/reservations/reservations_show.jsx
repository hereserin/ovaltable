import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const ReservationShowPage = (props) => {
  // let listOfReservations = props.reservations.map((resrvatio))

    return (
      <div>
        <h3>Your reservation at {props.reservation.restaurant.restaurant_name}</h3>
        <ul>
        </ul>
      </div>
    );
};


export default ReservationShowPage;
