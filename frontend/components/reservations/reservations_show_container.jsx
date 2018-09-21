import { connect } from 'react-redux';
import ReservationShowPage from './reservation_show_page';
import { fetchReservation } from './../../actions/reservations_actions';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state, ownProps) => {
  // debugger
  return ({
    reservation: state.entities.reservations[ownProps.match.params.reservationId],
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    hoursOfOperation: state.entities.hoursOfOperation
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchReservations: () => {
      return dispatch(fetchReservations())
    }
  });
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ReservationShowPage));
