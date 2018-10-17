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

export const selectPhotos = ({ photos }) => {
  return (
    Object.keys(photos).map((id) => {
      return photos[id];
    })
  );
};

export const selectReviews = ({ reviews }) => {
  return (
    Object.keys(reviews).map((id) => {
      return reviews[id];
    })
  );
};
