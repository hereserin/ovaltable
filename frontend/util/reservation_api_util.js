export const makeReservation = (reservation) => {
  return $.ajax({
      method: 'POST',
      url: `/api/reservations`,
      data: { reservation }
  });
};

// export const editReservation = (id) => {
//   return $.ajax({
//       method: 'POST',
//       url: `/api/reservations/${id}`,
//       data: { reservation }
//   });
// };


export const cancelReservation = (id) => {
  return $.ajax({
      method: 'DELETE',
      url: `/api/reservations/${id}`,
  });
};

export const fetchReservations = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/reservations`
  });
};

export const fetchReservation = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/reservations${id}`
  });
};
