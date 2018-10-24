import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { selectReservations } from "./../../reducers/selectors";
import { fetchReservations } from "./../../actions/reservations_actions";

const mapStatetoProps = state => {
  return {
    reservations: state.entities.reservations,
    photos: state.entities.photos,
    restaurants: state.entities.restaurants,
    order: state.order
  };
};

export default connect(mapStatetoProps)(ReservationIndex);
