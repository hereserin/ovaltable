import { merge } from "lodash";
import { RECEIVE_RESERVATIONS } from "./../actions/reservations_actions";
import { RECEIVE_RESTAURANTS } from "./../actions/restaurant_actions";
import { CLEAR_ORDER } from "./../actions/sorting_order_actions";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "./../actions/session_actions";

const initialState = [];

const sortingOrderReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return action.order;
    case RECEIVE_RESTAURANTS:
      return action.order;
    case CLEAR_ORDER:
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default sortingOrderReducer;
