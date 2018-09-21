import { connect } from 'react-redux';
import MakeReservationForm from './make_reservation_form';
import { submitReservation } from './../../actions/reservations_actions';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state, ownProps) => {
  // debugger
  return ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    hoursOfOperation: state.entities.hoursOfOperation
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    submitReservation: (reservation) => {
      dispatch(submitReservation(reservation));
    },
    fetchRestaurant: (id) => {
      return dispatch(fetchRestaurant(id))
    }
  });
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(MakeReservationForm));
