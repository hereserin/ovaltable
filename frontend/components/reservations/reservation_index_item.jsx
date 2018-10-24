import React from "react";
import { withRouter } from "react-router-dom";

const ReservationIndexItem = props => {
  // let formatedDate = (string) => {
  //   let res_time = props.reservation.date_and_time
  //   debugger
  // }

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
        {props.reservation.party_size}
      </div>
      <div>
        <h3>DATE</h3>
        <p>{props.reservation.date}</p>
      </div>
      <div>
        <h3>TIME</h3>
        <p>{props.reservation.time}</p>
      </div>
      <div>
        <h3>RESTAURANT</h3>
        <div
          className="reservation_index_item_rest_link"
          onClick={() => {
            props.history.push(
              `/restaurants/${props.reservation.restaurant_id}`
            );
          }}
        >
          {props.reservation.restaurant_name}
        </div>
      </div>
    </li>
  );
};

export default withRouter(ReservationIndexItem);
