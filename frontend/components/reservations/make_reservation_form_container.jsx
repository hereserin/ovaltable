import { connect } from "react-redux";
import MakeReservationForm from "./make_reservation_form";
import {
  submitReservation,
  receiveReservationErrors,
  fetchReservations
} from "./../../actions/reservations_actions";
import { fetchRestaurant } from "./../../actions/restaurant_actions";
import { withRouter } from "react-router-dom";

const mapStatetoProps = (state, ownProps) => {
  // debugger
  return {
    errors: state.errors.reservation,
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    hoursOfOperation: state.entities.hoursOfOperation,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitReservation: reservation => {
      return dispatch(submitReservation(reservation));
    },
    fetchRestaurant: id => {
      return dispatch(fetchRestaurant(id));
    },
    clearErrors: () => {
      return dispatch(receiveReservationErrors([]));
    },
    fetchReservations: () => {
      return dispatch(fetchReservations());
    }
  };
};

export default withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(MakeReservationForm)
);
