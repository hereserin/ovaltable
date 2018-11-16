import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { selectRestaurantsFromOrder } from "./../../reducers/selectors";
import { fetchRestaurants } from "./../../actions/restaurant_actions";

const mapStatetoProps = state => {
  return {
    restaurants: selectRestaurantsFromOrder(state.entities, state.order),
    restaurantOrder: state.order,
    photos: state.entities.photos,
    loading: state.ui.loading.index,
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
