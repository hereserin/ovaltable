import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import ReviewIndexItem from './review_index_item';

const ReviewsIndex = (props) => {
  console.log(props)
  console.log(props.restaurantReviewIds)
  let reviewsList = props.restaurantReviewIds.map((indexId, idx) => {
      return (
        <ReviewIndexItem key={idx} review={props.reviews[indexId]} />
      );
  })


  return (
    <div className='reviews-list'>
      <h2>Reviews</h2>
      <div>
        This is where the Restaurant Reviews will go...
        All review-items will be rendered in here.
        {reviewsList}
      </div>
      <ReviewForm />
    </div>
  );
};

const mapStatetoProps = (state) => {
  return ({
    reviews: state.entities.reviews,
  })
}


export default ReviewsIndex;
