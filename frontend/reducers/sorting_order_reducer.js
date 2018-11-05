import { merge } from "lodash";
import { RECEIVE_RESERVATIONS } from "./../actions/reservations_actions";
import { CLEAR_ORDER } from "./../actions/sorting_order_actions";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "./../actions/session_actions";

const sortingOrderReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
    case RECEIVE_CURRENT_USER:
      return action.order;
    case CLEAR_ORDER:
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sortingOrderReducer;
