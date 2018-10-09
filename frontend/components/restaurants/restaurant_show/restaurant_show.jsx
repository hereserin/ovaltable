import React from 'react';
import RestaurantInfo from './restaurant_info';
import RestaurantPhotos from './../../photos/restaurant_photos';
import ReviewIndex from './reviews_index';
import MakeReservationFormContainer from './../../reservations/make_reservation_form_container';
import RestaurantShowBanner from './restaurant_show_banner';
import RestaurantShowBar from './restaurant_show_bar';
import { withRouter } from 'react-router-dom';

class RestaurantShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: this.props.restaurant,
      // hoursOfOperation: this.props.hoursOfOperation,
      photos: this.props.photos,
      reviews: this.props.reviews
    }
  }
  componentDidMount(){
    let i = 1;
    console.log(`mounted: mount number ${i}`);
    i = i + 1;
    this.props.fetchRestaurant(this.props.match.params.restaurantId).then(() => {
      console.log("data came back")
      this.setState({photos: this.props.state.photos, reviews: this.props.state.reviews})
    });
  }

  render() {
    if (this.state.restaurant == undefined) return <div></div>;
// this.state.restaurant == undefined || this.props.restaurant.photos == undefined ||
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
              <RestaurantPhotos />
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

// photos={this.props.photos} restaurantPicIds={this.props.restaurant.photos}
