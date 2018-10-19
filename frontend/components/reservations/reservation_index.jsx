import React from "react";
import ReservationIndexItem from "./reservation_index_item";
import { Route } from "react-router-dom";

const ReservationIndex = props => {
  const reservations = props.reservations.map((reservation, idx) => {
    return <ReservationIndexItem key={idx} reservation={reservation} />;
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
