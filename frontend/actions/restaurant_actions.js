import * as RestaurantAPIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';


export const fetchRestaurant = (id) => {
  // debugger
  return (dispatch) => {
    return RestaurantAPIUtil.fetchRestaurant(id).then(
      (restaurant) => {
        return dispatch(receiveRestaurant(restaurant))
      },
      (error) => {
        return dispatch(receiveRestaurantErrors(error))
      });
  };
};

export const fetchRestaurants = () => {
  return (dispatch) => {
    return RestaurantAPIUtil.fetchRestaurants().then(
      (restaurants) => {
        return dispatch(receiveRestaurants(restaurants))
      },
      (error) => {
        return dispatch(receiveRestaurantErrors(error))
      });
  };
};

const receiveRestaurant = (restaurant) => {
  return ({
    type: RECEIVE_RESTAURANT,
    restaurant: restaurant
  });
};

const receiveRestaurants = (restaurants) => {
  return ({
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants
  });
};

const receiveRestaurantErrors = (error) => {
  return ({
    type: RECEIVE_RESTAURANT_ERRORS,
    restaurantError: error
  });
};
