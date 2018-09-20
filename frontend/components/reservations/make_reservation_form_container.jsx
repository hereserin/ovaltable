import { connect } from 'react-redux';
import MakeReservationForm from './make_reservation_form';
// import {  } from './../../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state, ownProps) => {
  debugger
  return ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    hoursOfOperation: state.entites.hoursOfOperation
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processReservationRequest: (reservation) => {
      // dispatch(submitReservation(reservation));
      }
  });
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(MakeReservationForm));
