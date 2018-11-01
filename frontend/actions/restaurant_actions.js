import * as RestaurantAPIUtil from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";

export const fetchRestaurant = id => {
  return dispatch => {
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

export const fetchRestaurants = () => {
  return dispatch => {
    return RestaurantAPIUtil.fetchRestaurants().then(
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

const receiveRestaurants = ({ restaurants, photos }) => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants: restaurants,
    photos: photos
  };
};

const receiveRestaurantErrors = error => {
  return {
    type: RECEIVE_RESTAURANT_ERRORS,
    restaurantError: error
  };
};
