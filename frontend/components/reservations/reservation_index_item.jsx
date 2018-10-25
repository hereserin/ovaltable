import React from "react";
import { withRouter } from "react-router-dom";

const ReservationIndexItem = props => {
  const peopleOrPerson =
    props.reservation.party_size > 1 ? " people" : " person";

  // TODO: add confirmation module before deleting a reservation

  return (
    <li className="reservation_index_item">
      <section className="reservation_index_item_top">
        <div>
          <img
            className="reservation_index_item_thumbnail"
            src={props.thumbnail}
          />
        </div>
        <div>
          <h3>GUESTS</h3>
          <p>
            {props.reservation.party_size}
            {peopleOrPerson}
          </p>
        </div>
        <div>
          <h3>DATE</h3>
          <p>{props.reservation.date}</p>
        </div>
        <div>
          <h3>TIME</h3>
          <p>{props.reservation.time}</p>
        </div>
        <div className="reservation_index_item_rest_link">
          <h3>RESTAURANT</h3>
          <div>
            <p
              onClick={() => {
                props.history.push(
                  `/restaurants/${props.reservation.restaurant_id}`
                );
              }}
            >
              {props.reservation.restaurant_name}
            </p>
          </div>
        </div>
      </section>
      <section className="reservation_index_item_bottom">
        <button>Modify</button>
        <button
          onClick={() => {
            props.showReservation(props.reservation.id);
            props.openModalPhotoForm();
          }}
        >
          Cancel
        </button>
      </section>
    </li>
  );
};

export default withRouter(ReservationIndexItem);

// onClick={props.cancelReservation}
