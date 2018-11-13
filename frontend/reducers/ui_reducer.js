import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import showPhotoReducer from "./show_photo_reducer";
import showReservationReducer from "./show_reservation_reducer";
import loadingReducer from "./loading_reducer";

const uiReducer = combineReducers({
  modal: modalReducer,
  showPhoto: showPhotoReducer,
  showReservation: showReservationReducer,
  loading: loadingReducer
});

export default uiReducer;
