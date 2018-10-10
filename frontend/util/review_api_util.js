export const makeReview = (review) => {
  return $.ajax({
      method: 'POST',
      url: `/api/reviews`,
      data: { review }
  });
};
