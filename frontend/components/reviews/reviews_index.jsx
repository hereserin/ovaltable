import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import ReviewIndexItem from './review_index_item';
import { ProtectedRoute } from './../../util/route_util.jsx';
import { withRouter } from 'react-router-dom';

const ReviewsIndex = (props) => {

      let reviewsList = props.reviewIds.map((indexId, idx) => {
          return (
            <ReviewIndexItem key={idx} review={props.reviews[indexId]} />
          );
        })

      return (
        <div className='reviews-list'>
          <h2>Reviews</h2>
          <div>
            {reviewsList}
          </div>

          <ProtectedRoute component={() => {
              return (
                <ReviewForm />
              );
          }} />
        </div>
      );
}


const mapStateToProps = (state, ownProps) => {
  const restaurantId = ownProps.location.pathname.split("/")[2];
  return {
      reviews: state.entities.reviews,
      reviewIds: state.entities.restaurants[restaurantId].reviews
  };
};
// HOW DO YOU GET A WILDCARD FROM A URL?

export default withRouter(connect(mapStateToProps)(ReviewsIndex));
