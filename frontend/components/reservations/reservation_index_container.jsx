import { connect } from 'react-redux';
import ReservationIndex from './reservation_index';
import { selectReservations } from './../../reducers/selectors';
import { fetchReservations } from './../../actions/reservations_actions';

const mapStatetoProps = (state) => {
  // debugger

  return ({
  reservations: selectReservations(state.entities),
  state
});
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchReservations: () => {
      return dispatch(fetchReservations())
    }
  });
};


export default connect(mapStatetoProps, mapDispatchToProps)(ReservationIndex);
