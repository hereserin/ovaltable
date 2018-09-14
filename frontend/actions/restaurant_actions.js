import * as RestaurantAPIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';


export const fetchRestaurant = (id) => {
  return (dispatch) => {
    return RestaurantAPIUtil.fetchRestaurant.then(
      (restaurant) => {
        dispatch(receiveRestaurant(restaurant))
      },
      (error) => {
        dispatch(receiveRestaurantErrors(error))
      });
  };
};

export const fetchRestaurants = () => {
  return (dispatch) => {
    return RestaurantAPIUtil.fetchRestaurants.then(
      (restaurants) => {
        dispatch(receiveRestaurant(restaurants))
      },
      (error) => {
        dispatch(receiveRestaurantErrors(error))
      });
  };
};

const receiveRestaurant = (restaurant) => {
  return ({
    action: RECEIVE_RESTAURANT,
    restaurant: restaurant
  });
};

const receiveRestaurants = (restaurants) => {
  return ({
    action: RECEIVE_RESTAURANTS,
    restaurants: restaurants
  });
};

const receiveRestaurantErrors = (error) => {
  return ({
    action: RECEIVE_RESTAURANT_ERRORS,
    restaurantError: error
  });
};
