export const selectRestaurants = ({ restaurants }) => {
  return Object.values(restaurants);
};

export const selectRestaurantsFromOrder = ({ restaurants }, order) => {
  return order.map(restId => {
    return restaurants[restId];
  });
};

export const selectReservations = ({ reservations }) => {
  return Object.values(reservations);
};

export const selectPhotos = ({ photos }) => {
  return Object.values(photos);
};

export const selectReviews = ({ reviews }) => {
  return Object.values(reviews);
};
