export const makeReview = review => {
  return $.ajax({
    method: "POST",
    url: `/api/reviews`,
    data: { review }
  });
};

export const cancelReview = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${id}`
  });
};

export const fetchReview = id => {
  return $.ajax({
    method: "GET",
    url: `/api/reviews/${id}`
  });
};
