import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import uiReducer from "./ui_reducer";
import sortingOrderReducer from "./sorting_order_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  order: sortingOrderReducer,
  ui: uiReducer
});

export default rootReducer;
