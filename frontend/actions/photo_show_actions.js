export const SHOW_PHOTO = "SHOW_PHOTO";
export const CLEAR_PHOTO = "CLEAR_PHOTO";

export const showPhoto = ({ id, user_id }) => {
  return {
    type: SHOW_PHOTO,
    photo: id,
    author: user_id
  };
};

export const clearPhoto = () => {
  return {
    type: CLEAR_PHOTO,
    photo: null
  };
};
