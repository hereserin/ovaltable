import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { selectReservations } from "./../../reducers/selectors";
import { fetchReservations } from "./../../actions/reservations_actions";

const mapStatetoProps = state => {
  return {
    reservations: selectReservations(state.entities)
  };
};

export default connect(mapStatetoProps)(ReservationIndex);
