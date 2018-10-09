export const SHOW_PHOTO = 'SHOW_PHOTO';
export const CLEAR_PHOTO = 'CLEAR_PHOTO';



export const showPhoto = (photo) => {
  return ({
    type: SHOW_PHOTO,
    photo: photo
  });
};

export const clearPhoto = () => {
  return ({
    type: CLEAR_PHOTO,
    photo: null,
  });
};
