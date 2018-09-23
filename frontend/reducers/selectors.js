export const selectRestaurants = ({ restaurants }) => {
  return (
    Object.keys(restaurants).map((id) => {
      return restaurants[id];
    })
  );
};

export const selectReservations = ({ reservations }) => {
  return (
    Object.keys(reservations).map((id) => {
      return reservations[id];
    })
  );
};
