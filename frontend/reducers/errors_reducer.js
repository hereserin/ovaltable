import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer'
import reservationsErrorsReducer from './reservations_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reservation: reservationsErrorsReducer,
});

export default errorsReducer;
