import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import restaurantsReducer from './restaurants_reducer';
import reservationsReducer from './reservations_reducer';
import photosReducer from './photos_reducer';
import reviewsReducer from './reviews_reducer';
import hoursOfOperationReducer from './hours_of_operation_reducer'


const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  hoursOfOperation: hoursOfOperationReducer,
  users: usersReducer,
  reservations: reservationsReducer,
  photos: photosReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;
