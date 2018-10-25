import { merge } from "lodash";
import { RECEIVE_RESERVATIONS } from "./../actions/reservations_actions";
import { CLEAR_ORDER } from "./../actions/sorting_order_actions";

const sortingOrderReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      // return merge({}, state, action.order);
      return action.order;
    case CLEAR_ORDER:
      return [];
    default:
      return state;
  }
};

export default sortingOrderReducer;
