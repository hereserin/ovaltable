import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { selectReservations } from "./../../reducers/selectors";
import { fetchReservations } from "./../../actions/reservations_actions";

const mapStatetoProps = state => {
  return {
    reservations: selectReservations(state.entities),
    photos: state.entities.photos,
    restaurants: state.entities.restaurants
  };
};

export default connect(mapStatetoProps)(ReservationIndex);
