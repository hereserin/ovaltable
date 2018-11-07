export const fetchPhoto = id => {
  // debugger
  return $.ajax({
    method: "GET",
    url: `/api/photos/${id}`
  });
};

export const fetchPhotos = () => {
  return $.ajax({
    method: "GET",
    url: `/api/photos`
  });
};

export const postPhoto = photoFormData => {
  return $.ajax({
    method: "POST",
    url: "/api/photos",
    data: photoFormData,
    contentType: false,
    processData: false
  });
};

export const deletePhoto = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/photos/${id}`
  });
};
