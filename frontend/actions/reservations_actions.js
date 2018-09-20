import * as ReservationAPIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';


export const submitReservation = (reservation) => {
  return (dispatch) => {
    return ReservationAPIUtil.makeReservation(reservation).then(
      (reservation) => {
        return dispatch(receiveReservation(reservation))
      },
      (error) => {
        return dispatch(receiveReservationErrors(error))
      }
    );
  };
};

export const fetchReservation = (id) => {
  return (dispatch) => {
    return ReservationAPIUtil.fetchReservation(id).then(
      (reservation) => {
        return dispatch(receiveReservation(reservation))
      },
      (error) => {
        return dispatch(receiveReservationErrors(error))
      }
    );
  };
};

export const fetchReservations = () => {
  return (dispatch) => {
    return ReservationAPIUtil.fetchReservations().then(
      (reservations) => {
        return dispatch(receiveReservation(reservations))
      },
      (error) => {
        return dispatch(receiveReservationErrors(error))
      }
    );
  };
};

const receiveReservation = (reservation) => {
  return ({
    type: RECEIVE_RESERVATION,
    reservation: reservation,
  });
};

const receiveRestaurants = (reservations) => {
  return ({
    type: RECEIVE_RESERVATIONS,
    reservations: reservations,
  });
};

const receiveReservationErrors = (error) => {
  return ({
    type: RECEIVE_RESERVATION_ERRORS,
    restaurantError: error
  });
};
