import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';

const mapStatetoProps = (state) => {
  restaurants: state.entities.restaurants
};

const mapDispatchToProps = (dispatch) => {
  fetchRestaurants: () => {
    return (
      dispatch(fetchRestaurants())
    );
  }
};

export default connect(mapStatetoProps, mapDispatchToProps)(RestaurantIndex);
