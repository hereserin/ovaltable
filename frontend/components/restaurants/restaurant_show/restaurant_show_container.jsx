import { connect } from 'react-redux';
import RestaurantShowPage from './restaurant_show';
import { fetchRestaurant } from './../../../actions/restaurant_actions';

const mapStatetoProps = (state, ownProps) => {
  // debugger
  return ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchRestaurant: () => {
      return dispatch(fetchRestaurant(id))
    }
  });
};

export default connect(mapStatetoProps, mapDispatchToProps)(RestaurantShowPage);
