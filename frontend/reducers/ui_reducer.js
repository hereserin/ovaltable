import { combineReducers } from 'redux';
import modalReducer from './modal_reducer'
import showPhotoReducer from './show_photo_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  showPhoto: showPhotoReducer,
});

export default uiReducer;
