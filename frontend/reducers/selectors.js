export const selectRestaurants = ({ restaurants }) => {
  // debugger
  return (
    Object.keys(restaurants).map((id) => {
      return restaurants[id];
    })
  );
};
