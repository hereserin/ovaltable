import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import reservationsErrorsReducer from "./reservations_errors_reducer";
import reviewErrorsReducer from "./reviews_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reservation: reservationsErrorsReducer,
  reviews: reviewErrorsReducer
});

export default errorsReducer;
