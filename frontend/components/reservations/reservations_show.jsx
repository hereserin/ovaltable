import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearReservation } from "./../../actions/reservation_show_actions";
import { openModal, closeModal } from "./../../actions/modal_actions";

const ReservationShowPage = ({
  specialMessage,
  reservation,
  clearReservation,
  closeModal,
  showType
}) => {
  // const message = specialMessage
  //   ? specialMessage
  //   : `Your upcoming reservation at ${reservation.restaurant_name}:`;

  let message = `Your upcoming reservation at ${reservation.restaurant_name}:`;

  if (showType === "reservation-cancel-confirmation") {
    message = `Are you sure you want to cancel your upcoming reservation at ${
      reservation.restaurant_name
    }?`;
  }

  const peopleOrPerson = reservation.party_size > 1 ? " people" : " person";

  return (
    <div>
      <span className="photo-show-modal">
        <span
          className="photo-show-modal-screen"
          onClick={() => {
            clearReservation();
            closeModal();
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
                  {reservation.party_size}
                  {peopleOrPerson}
                </p>
                <br />
                <h3>DATE:</h3>
                <p>{reservation.date}</p>
                <br />
                <h3>TIME:</h3>
                <p>{reservation.time}</p>
                <br />
                <h3>RESTAURANT:</h3>
                <p>{reservation.restaurant_name}</p>
              </div>
              <div className="reservation_module_bottom">
                <button>Nevermind</button>
                <button>Cancel Reservation</button>
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
    reservation: state.entities.reservations[state.ui.showReservation],
    showType: state.ui.modal
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
