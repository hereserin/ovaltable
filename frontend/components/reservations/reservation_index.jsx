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
    // debugger;
    return (
      <ReservationIndexItem
        key={idx}
        reservation={reservation}
        thumbnail={thumbnail}
        cancelReservation={() => props.cancelReservation(reservationId)}
        openModalPhotoForm={() => props.openModalShowReservation(reservationId)}
        showReservation={() => props.showReservation(reservationId)}
      />
    );
  });
  const numOfReservations = reservations.length;

  return (
    <section>
      <h1>Your Reservations:</h1>
      <ul>{reservations}</ul>
      <h1>{`You have ${numOfReservations} reservation(s)`}</h1>
    </section>
  );
};

export default ReservationIndex;
