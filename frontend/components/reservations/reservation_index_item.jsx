import React from "react";
import { withRouter } from "react-router-dom";

const ReservationIndexItem = props => {
  const peopleOrPerson =
    props.reservation.party_size > 1 ? " people" : " person";

  return (
    <li className="reservation_index_item">
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
        <p>
          <div
            onClick={() => {
              props.history.push(
                `/restaurants/${props.reservation.restaurant_id}`
              );
            }}
          >
            {props.reservation.restaurant_name}
          </div>
        </p>
      </div>
    </li>
  );
};

export default withRouter(ReservationIndexItem);
