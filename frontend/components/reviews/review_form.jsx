import React from 'react';

class ReviewForm extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      review: {reviewBody: ""},
      errorInstructions: ""
    };
  }

    handleSubmit() {
      const review = Object.assigh({}, this.re)
      this.props.submitReview(review).then(
        this.setState({
          reviewBody: "",
        }),
        this.setState({
          errorInstructions: "Unable to submit this review. Please edit and try again"
        })
      )
    }

    handleInput(e) {
      this.setState({
        reviewBody: e.currentTarget.value
      });
    }


    render() {
      return(
        <div>
          <h3>Add a review</h3>
          <form className="reviews-form" onSubmit={this.handleSubmit}>
            <textarea rows="5" cols="45"
              className='photo-form-textarea'
              id="caption"
              placeholder="How was your visit?"
              value={this.state.reviewBody}
              onChange={this.handleInput}/>


            <button className="review-form-button"> Post Review </button>
          </form>
        </div>
      );
    }

}

export default ReviewForm;
