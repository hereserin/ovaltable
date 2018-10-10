import React from 'react';
import RestaurantInfo from './restaurant_info';
import RestaurantPhotos from './../../photos/restaurant_photos';
import ReviewsIndex from './../../reviews/reviews_index';
import MakeReservationFormContainer from './../../reservations/make_reservation_form_container';
import RestaurantShowBanner from './restaurant_show_banner';
import RestaurantShowBar from './restaurant_show_bar';
import { withRouter } from 'react-router-dom';

class RestaurantShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: null,
      // hoursOfOperation: this.props.hoursOfOperation,
      photos: null,
      reviews: null
    }
  }
  componentDidMount(){
    let i = 1;
    // console.log(`mounted: mount number ${i}`);
    i = i + 1;
    this.props.fetchRestaurant(this.props.match.params.restaurantId).then((payload) => {
      // console.log("data came back")

      this.setState({photos: payload.photos, reviews: payload.reviews, restaurant: payload.restaurant})
    });
  }

  render() {
    // debugger
    if (this.state.restaurant == undefined || this.state.restaurant.photos == undefined) return <div></div>;
// this.state.restaurant == undefined || this.state.restaurant.photos == undefined ||
    // if (this.props.restaurant.reviews == undefined) return <div></div>;

    return (
      <div>
        <RestaurantShowBanner restaurant={this.props.restaurant} />

        <main className='main-restaurant-show-page'>

          <section className='restaurant-show-section-holder'>
            <RestaurantShowBar />
            <div id="Overview">
              <RestaurantInfo restaurant={this.props.restaurant} hours={this.props.hoursOfOperation}/>
            </div>

            <div id="Photos">
              <RestaurantPhotos photos={this.state.photos} restaurantPicIds={this.state.restaurant.photos} />
            </div>

            <div id="Reviews">
              <ReviewsIndex reviews={this.props.reviews} restaurantReviewIds={this.props.restaurant.reviews}  />
            </div>


          </section>

          <aside>
            <MakeReservationFormContainer/>
          </aside>

      </main>
    </div>
    );
}

};

export default withRouter(RestaurantShowPage);



// <div id="Reviews">
//   <ReviewIndex reviews={this.props.reviews} restaurantReviewIds={this.props.restaurant.reviews} />
// </div>
