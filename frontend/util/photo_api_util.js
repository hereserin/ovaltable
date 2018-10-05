export const fetchPhoto = (id) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  });
};

export const fetchPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos`
  });
};
