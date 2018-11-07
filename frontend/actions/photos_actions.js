import * as PhotoAPIUtil from "../util/photo_api_util";

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const DELETE_PHOTO = "DELETE_PHOTOS";

export const submitPhoto = photo => {
  return dispatch => {
    return PhotoAPIUtil.postPhoto(photo).then(
      photo => {
        return dispatch(receivePhoto(photo));
      }
      // (error) => {
      //   return dispatch(receiveReservationErrors(error))
      // }
    );
  };
};

export const fetchPhoto = id => {
  return dispatch => {
    return PhotoAPIUtil.fetchPhoto(id).then(
      photo => {
        return dispatch(receivePhoto(photo));
      }
      // (error) => {
      //   return dispatch(receiveReservationErrors(error))
      // }
    );
  };
};

export const fetchPhotos = () => {
  return dispatch => {
    return PhotoAPIUtil.fetchPhotos().then(
      photos => {
        return dispatch(receivePhotos(photos));
      }
      // (error) => {
      //   return dispatch(receiveReservationErrors(error))
      // }
    );
  };
};

export const deletePhoto = (id, restId) => {
  return dispatch => {
    return PhotoAPIUtil.deletePhoto(id, restId).then(payload => {
      return dispatch(removePhoto(id, restId));
    });
  };
};

const receivePhoto = ({ photo, user }) => {
  return {
    type: RECEIVE_PHOTO,
    photo: photo,
    users: user
  };
};

const removePhoto = (photoId, restId) => {
  return {
    type: DELETE_PHOTO,
    photoId: photoId,
    restId: restId
  };
};

const receivePhotos = photos => {
  return {
    type: RECEIVE_PHOTOS,
    photos: photos
  };
};
