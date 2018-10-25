import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearPhoto } from "./../../actions/photo_show_actions";
import { openModal, closeModal } from "./../../actions/modal_actions";

const ReservationShowPage = props => {
  // let listOfReservations = props.reservations.map((resrvatio))

  return (
    <div>
      <span className="photo-show-modal">
        <span
          className="photo-show-modal-screen"
          onClick={() => {
            props.clearReservation();
            // debugger
            props.closeModal();
            // props.history.goBack();
          }}
        >
          <span
            className="reservation-show-modal-box"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <span className="show-photo-span">
              <h2>Are you sure you want to cancel your reservation?</h2>
              <h3>
                Your reservation at{" "}
                {props.reservations[props.showReservationId].restaurant_name}
              </h3>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showReservationId: state.ui.showReservation,
    reservations: state.entities.reservations
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
