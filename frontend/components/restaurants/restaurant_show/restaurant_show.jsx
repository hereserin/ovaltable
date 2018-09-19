import React from 'react';
import RestaurantInfo from './restaurant_info';
import RestaurantPhotos from './../../photos/restaurant_photos';
import ReviewIndex from './reviews_index';
import MakeReservationForm from './../../reservations/make_reservation_form';
import RestaurantShowBanner from './restaurant_show_banner';
import RestaurantShowBar from './restaurant_show_bar';
import { withRouter } from 'react-router-dom';

class RestaurantShowPage extends React.Component {
  componentDidMount(){
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    if (!this.props.restaurant) return <div></div>;

    return (
      <div>
        <RestaurantShowBanner restaurant={this.props.restaurant} />

        <main className='main-restaurant-show-page'>
          <section>
            <RestaurantShowBar />
            <RestaurantInfo restaurant={this.props.restaurant} />
            <RestaurantPhotos restaurant={this.props.restaurant} />
            <ReviewIndex restaurant={this.props.restaurant} />
          </section>

          <aside>
            <MakeReservationForm restaurant={this.props.restuarant} />
          </aside>
      </main>
    </div>
    );
}

};

export default withRouter(RestaurantShowPage);
