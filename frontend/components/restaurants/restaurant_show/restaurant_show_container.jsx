import { connect } from 'react-redux';
import RestaurantShowPage from './restaurant_show';
import { fetchRestaurant } from './../../../actions/restaurant_actions';
import { fetchPhoto, fetchPhotos } from './../../../actions/photos_actions';
import { selectPhotos } from './../../../reducers/selectors';

const mapStatetoProps = (state, ownProps) => {

  return ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    hoursOfOperation: state.entities.hoursOfOperation,
    photos: state.entities.photos,
    reviews: state.entities.reviews,
    state: state,
    // photos: selectPhotos(state.entities)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchRestaurant: (id) => {
      return dispatch(fetchRestaurant(id))
    },
    fetchPhotos: () => {
      return dispatch(fetchPhotos())
    },
    fetchPhoto: (id) => {
      return dispatch(fetchPhoto(id))
    },

  });
};

export default connect(mapStatetoProps, mapDispatchToProps)(RestaurantShowPage);
