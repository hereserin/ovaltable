export const SHOW_RESERVATION = "SHOW_RESERVATION";
export const CLEAR_RESERVATION = "CLEAR_RESERVATION";

export const showReservation = reservation => {
  return {
    type: SHOW_RESERVATION,
    reservation: reservation
  };
};

export const clearReservation = () => {
  return {
    type: CLEAR_RESERVATION,
    reservation: null
  };
};
