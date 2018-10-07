import React from 'react';
import RestaurantInfo from './restaurant_info';
import RestaurantPhotos from './../../photos/restaurant_photos';
import ReviewIndex from './reviews_index';
import MakeReservationFormContainer from './../../reservations/make_reservation_form_container';
import RestaurantShowBanner from './restaurant_show_banner';
import RestaurantShowBar from './restaurant_show_bar';
import { withRouter } from 'react-router-dom';

class RestaurantShowPage extends React.Component {
  componentDidMount(){
    // debugger
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    if (this.props.restaurant.photos == undefined) return <div></div>;

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
              <RestaurantPhotos photos={this.props.photos} restaurantPicIds={this.props.restaurant.photos}/>
            </div>

            <div id="Reviews">
              <ReviewIndex restaurant={this.props.restaurant} />
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
