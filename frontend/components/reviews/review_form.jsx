import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitReview } from './../../actions/reviews_actions';
import { withRouter } from 'react-router-dom';


class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.ratingOptions = this.ratingOptions.bind(this);
    this.handleNumericRatingInput = this.handleNumericRatingInput.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
    this.onSuccesfulSubmission = this.onSuccesfulSubmission.bind(this);

    this.state = {
      ratingOverall: null,
      reviewBody: "",
      restaurantId: this.props.restaurant,
      errorInstructions: ""
    };
  }

    handleSubmit(e) {
      e.preventDefault();
      debugger
      const newReview = {
        review_body: this.state.reviewBody,
        restaurant_id: this.state.restaurantId,
        rating_overall: this.state.ratingOverall
      }
      this.props.submitReview(newReview).then(
        (review) => (
          this.onSuccesfulSubmission(review)
        ),
        (error) => {
            return (this.setState({
            errorInstructions: "Unable to submit this review. Please edit and try again"
          }))
        })
    }

    onSuccesfulSubmission(review) {
      debugger
      this.clearInputFields();
      props.onNewReviewSubmission(review.id);
    }

    clearInputFields() {
      return this.setState({
        reviewBody: "",
      })
    }

    handleBodyInput(e) {
      return this.setState({
        reviewBody: e.currentTarget.value
      });
    }

    handleNumericRatingInput(e) {
        return this.setState({ ratingOverall: e.target.selectedIndex });
    }

    ratingOptions() {
      return ([1,2,3,4,5].map((num, idx) => {
        return (
          <option key={idx} value={num}>{num}</option>
        )
      }))
    }


    render() {
      return(
        <div>
          <h3>Add a review</h3>
          <form className="reviews-form" onSubmit={this.handleSubmit}>

            <select className="star-drop-down" onChange={this.handleNumericRatingInput}>
              <option>Select your rating</option>
              {this.ratingOptions()}
            </select>


            <textarea rows="5" cols="45"
              className='photo-form-textarea'
              id="caption"
              placeholder="How was your visit?"
              value={this.state.reviewBody}
              onChange={this.handleBodyInput}/>

            <button className="review-form-button"> Post Review </button>
          </form>
        </div>
      );
    }

}



const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
    restaurant: ownProps.location.pathname.split("/")[2],
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    submitReview: (review) => dispatch(submitReview(review)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
