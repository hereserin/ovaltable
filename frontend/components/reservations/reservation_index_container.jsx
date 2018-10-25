import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { selectReservations } from "./../../reducers/selectors";
import {
  fetchReservations,
  deleteReservation
} from "./../../actions/reservations_actions";

const mapStatetoProps = state => {
  return {
    reservations: state.entities.reservations,
    photos: state.entities.photos,
    restaurants: state.entities.restaurants,
    order: state.order
  };
};

const mapDispatchToProps = dispatch => ({
  cancelReservation: id => dispatch(deleteReservation(id))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ReservationIndex);
