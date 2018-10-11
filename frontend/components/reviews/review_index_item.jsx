import React from 'react';

  const ReviewIndexItem = (props) => {

    const stars = (rating) => {
      debugger
      const one = (
          <div>
            <span className='review-stars-on'>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span className='review-stars-off'>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        );

      const two = (
          <div>
            <span className='review-stars-on'>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span className='review-stars-off'>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        );

      const three = (
          <div>
            <span className='review-stars-on'>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span className='review-stars-off'>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        );

      const four = (
          <div>
            <span className='review-stars-on'>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span className='review-stars-off'>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        );

      const five = (
          <div>
            <span className='review-stars-on'>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        );

        let starDiv;
        switch (rating) {
          case 1:
            starDiv = one;
            break;
          case 2:
            starDiv = two;
            break;
          case 3:
            starDiv = three;
            break;
          case 4:
            starDiv = four;
            break;
          case 5:
            starDiv = five;
            break;
          default:
            starDiv = five;
            break;
        }
      debugger
      return starDiv;
  }

  return (
    <div>
      <div className='review-item'>
        {stars(props.review.rating_overall)}
        <p>{props.review.review_body}</p>
      </div>
    </div>

  );
}


export default ReviewIndexItem;
