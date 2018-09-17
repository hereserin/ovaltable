import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { selectRestaurants } from './../../reducers/selectors';
import { fetchRestaurants } from './../../actions/restaurant_actions';

const mapStatetoProps = (state) => {
  // debugger

  return ({
  restaurants: selectRestaurants(state.entities),
  state
});
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchRestaurants: () => {
      return dispatch(fetchRestaurants())
    }
  });
};


export default connect(mapStatetoProps, mapDispatchToProps)(RestaurantIndex);
