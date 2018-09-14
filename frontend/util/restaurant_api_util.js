export const fetchRestaurant = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurant/${id}`
  });
};

export const fetchRestaurants = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants`
  });
};
