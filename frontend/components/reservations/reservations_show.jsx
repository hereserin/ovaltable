import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearReservation } from "./../../actions/reservation_show_actions";
import { openModal, closeModal } from "./../../actions/modal_actions";

const ReservationShowPage = props => {
  const message = props.specialMessage
    ? props.specialMessage
    : `Your upcoming reservation at ${props.reservation.restaurant_name}:`;
  const peopleOrPerson =
    props.reservation.party_size > 1 ? " people" : " person";

  return (
    <div>
      <span className="photo-show-modal">
        <span
          className="photo-show-modal-screen"
          onClick={() => {
            props.clearReservation();
            props.closeModal();
          }}
        >
          <span
            className="reservation-show-modal-box"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <span className="show-photo-span">
              <h2>{message}</h2>

              <div className="reservation-show-modal-info">
                <h3>GUESTS: </h3>
                <p>
                  {props.reservation.party_size}
                  {peopleOrPerson}
                </p>
                <br />
                <h3>DATE</h3>
                <p>{props.reservation.date}</p>
                <br />
                <h3>TIME</h3>
                <p>{props.reservation.time}</p>
                <br />
                <h3>RESTAURANT</h3>
                <p>{props.reservation.restaurant_name}</p>
              </div>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reservation: state.entities.reservations[state.ui.showReservation]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearReservation: () => dispatch(clearReservation()),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReservationShowPage)
);
