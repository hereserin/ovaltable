export const fetchRestaurant = (id) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${id}`
  });
};

export const fetchRestaurants = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants`
  });
};
