import React from "react";
import ReservationIndexItem from "./reservation_index_item";
import { Route } from "react-router-dom";

const ReservationIndex = props => {
  const reservations = props.order.map((reservationId, idx) => {
    const reservation = props.reservations[reservationId];
    const restaurant = reservation.restaurant_id;
    // TODO: REFACTOR TO MAKE THIS DRY, Need to add Thumbnail as its own component
    const thumbId = props.restaurants[reservation.restaurant_id].photos[0];
    let thumbnail = window.staticImages.defaultRestaurant;

    if (thumbId) {
      thumbnail = props.photos[thumbId].photoUrl;
    }

    return (
      <ReservationIndexItem
        key={idx}
        reservation={reservation}
        thumbnail={thumbnail}
      />
    );
  });
  const numOfReservations = reservations.length;

  return (
    <section>
      <p>Your Reservations:</p>
      <ul>{reservations}</ul>
      <p>{`You have ${numOfReservations} reservation(s)`}</p>
    </section>
  );
};

export default ReservationIndex;
