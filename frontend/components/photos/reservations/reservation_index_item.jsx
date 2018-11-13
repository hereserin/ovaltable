import React from "react";
import { withRouter } from "react-router-dom";

const ReservationIndexItem = ({
  reservation,
  thumbnail,
  history,
  showReservation,
  openModalPhotoForm
}) => {
  const peopleOrPerson = reservation.party_size > 1 ? " people" : " person";

  return (
    <li className="reservation_index_item">
      <section className="reservation_index_item_top">
        <div>
          <img className="reservation_index_item_thumbnail" src={thumbnail} />
        </div>
        <div>
          <h3>GUESTS</h3>
          <p>
            {reservation.party_size}
            {peopleOrPerson}
          </p>
        </div>
        <div>
          <h3>DATE</h3>
          <p>{reservation.date}</p>
        </div>
        <div>
          <h3>TIME</h3>
          <p>{reservation.time}</p>
        </div>
        <div className="reservation_index_item_rest_link">
          <h3>RESTAURANT</h3>
          <div>
            <p
              onClick={() => {
                history.push(`/restaurants/${reservation.restaurant_id}`);
              }}
            >
              {reservation.restaurant_name}
            </p>
          </div>
        </div>
      </section>
      <section className="reservation_index_item_bottom">
        <button>Modify</button>
        <button
          onClick={() => {
            showReservation(reservation.id);
            openModalPhotoForm();
          }}
        >
          Cancel
        </button>
      </section>
    </li>
  );
};

export default withRouter(ReservationIndexItem);
