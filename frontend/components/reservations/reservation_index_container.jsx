import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { selectReservations } from "./../../reducers/selectors";
import {
  fetchReservations,
  deleteReservation
} from "./../../actions/reservations_actions";
import { openModal } from "./../../actions/modal_actions";
import {
  showReservation,
  clearReservation
} from "./../../actions/reservation_show_actions";
import { AuthRoute, ProtectedRoute } from "./../../util/route_util.jsx";

const mapStatetoProps = state => {
  // const {r, p} =
  return {
    reservations: state.entities.reservations,
    photos: state.entities.photos,
    restaurants: state.entities.restaurants,
    order: state.order,
    loading: state.ui.loading.index
  };
};

const mapDispatchToProps = dispatch => ({
  cancelReservation: id => dispatch(deleteReservation(id)),
  openModalShowReservation: () =>
    dispatch(openModal("reservation-cancel-confirmation")),
  showReservation: clickedReservation =>
    dispatch(showReservation(clickedReservation)),
  clearReservation: () => dispatch(clearReservation()),
  fetchReservations: () => dispatch(fetchReservations())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ReservationIndex);
