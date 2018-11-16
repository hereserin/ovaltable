import * as RestaurantAPIUtil from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";
export const START_LOADING_RESTAURANTS = "START_LOADING_RESTAURANTS";
export const START_LOADING_RESTAURANT = "START_LOADING_RESTAURANT";

export const fetchRestaurant = id => {
  return dispatch => {
    dispatch(startLoadingRestaurant());
    return RestaurantAPIUtil.fetchRestaurant(id).then(
      payload => {
        return dispatch(receiveRestaurant(payload));
      },
      error => {
        return dispatch(receiveRestaurantErrors(error));
      }
    );
  };
};

export const fetchRestaurants = search => {
  return dispatch => {
    dispatch(startLoadingRestaurants());
    return RestaurantAPIUtil.fetchRestaurants(search).then(
      payload => {
        return dispatch(receiveRestaurants(payload));
      },
      error => {
        return dispatch(receiveRestaurantErrors(error));
      }
    );
  };
};

export const searchRestaurants = search => {
  return dispatch => {
    dispatch(startLoadingRestaurants());
    return RestaurantAPIUtil.searchRestaurants(search).then(
      payload => {
        return dispatch(receiveRestaurants(payload));
      },
      error => {
        return dispatch(receiveRestaurantErrors(error));
      }
    );
  };
};

const receiveRestaurant = ({
  restaurant,
  hours_of_operation,
  photos,
  reviews,
  users
}) => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant: restaurant,
    hoursOfOperation: hours_of_operation,
    photos: photos,
    reviews: reviews,
    users: users
  };
};

const receiveRestaurants = ({ restaurants, photos, order }) => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants,
    photos: photos,
    order: order
  };
};

const receiveRestaurantErrors = error => {
  return {
    type: RECEIVE_RESTAURANT_ERRORS,
    restaurantError: error
  };
};

export const startLoadingRestaurants = () => ({
  type: START_LOADING_RESTAURANTS
});

export const startLoadingRestaurant = () => ({
  type: START_LOADING_RESTAURANTS
});
