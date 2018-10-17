import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import ReviewIndexItem from './review_index_item';
import { ProtectedRoute } from './../../util/route_util.jsx';

class ReviewsIndex extends React.Component {

  // const ReviewsIndex = (props) => {
  //   console.log(props)
  //   console.log(props.restaurantReviewIds)
  //
  //   })

    constructor(props) {
      super(props);
      this.handleNewReviewAdded = this.handleNewReviewAdded.bind(this);
      this.state = {
        restaurantReviewIds: this.props.restaurantReviewIds,
      }
    }

    handleNewReviewAdded(newId) {
      this.setState(state, props)({
        restaurantReviewIds: restaurantReviewIds.push(newId),
      });
    }

    render() {
      let reviewsList = this.state.restaurantReviewIds.map((indexId, idx) => {
          return (
            <ReviewIndexItem key={idx} review={this.props.reviews[indexId]} />
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
                <ReviewForm
                  onNewReviewSubmission={this.handleNewReviewAdded}/>
              );
          }} />
        </div>
      );
    }

}


const mapStateToProps = (state) => ({
      reviews: state.entities.reviews,
});

// const mapDispatchToProps = (dispatch) => ({
//     FetchSomthinggggg: HERrrrreee
//   });



// export default ReviewsIndex;
// export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);
export default connect(mapStateToProps)(ReviewsIndex);
