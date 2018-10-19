import * as ReservationAPIUtil from "../util/reservation_api_util";

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";

export const submitReservation = reservation => {
  return dispatch => {
    return ReservationAPIUtil.makeReservation(reservation).then(
      reservation => {
        debugger;
        return dispatch(receiveReservation(reservation));
      },
      error => {
        return dispatch(receiveReservationErrors(error));
      }
    );
  };
};

export const fetchReservation = id => {
  return dispatch => {
    return ReservationAPIUtil.fetchReservation(id).then(
      reservation => {
        return dispatch(receiveReservation(reservation));
      },
      error => {
        return dispatch(receiveReservationErrors(error));
      }
    );
  };
};

export const fetchReservations = () => {
  return dispatch => {
    return ReservationAPIUtil.fetchReservations().then(
      reservations => {
        return dispatch(receiveReservations(reservations));
      },
      error => {
        return dispatch(receiveReservationErrors(error));
      }
    );
  };
};

const receiveReservation = payload => {
  return {
    type: RECEIVE_RESERVATION,
    reservation: payload
  };
};

const receiveReservations = payload => {
  return {
    type: RECEIVE_RESERVATIONS,
    reservations: payload.reservations
  };
};

export const receiveReservationErrors = errors => {
  return {
    type: RECEIVE_RESERVATION_ERRORS,
    errors: errors.responseJSON
  };
};
