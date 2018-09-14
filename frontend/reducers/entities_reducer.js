import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import restaurantsReducer from './restaurants_reducer';


const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  users: usersReducer
});

export default entitiesReducer;
