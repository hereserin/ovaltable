import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { selectRestaurants } from "./../../reducers/selectors";
import { fetchRestaurants } from "./../../actions/restaurant_actions";

const mapStatetoProps = state => {
  // debugger

  return {
    restaurants: selectRestaurants(state.entities),
    photos: state.entities.photos,
    state
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => {
    return dispatch(fetchRestaurants());
  }
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(RestaurantIndex);
