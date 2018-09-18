import React from 'react';
import RestaurantInfo from './restaurant_info';
import MakeReservationForm from './make_reservation_form';
import RestaurantPhotos from './restaurant_photos';
import ReviewIndex from './reviews_index';
import { withRouter } from 'react-router-dom';

class RestaurantShowPage extends React.Component {
  componentDidMount(){
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    if (!this.props.restaurant) return <div></div>;

    return (
      <section>
        <p>"This is the Rest Show page"</p>
        <RestaurantInfo restaurant={this.props.restaurant} />
        <MakeReservationForm restaurant={this.props.restaurant} />
        <RestaurantPhotos restaurant={this.props.restaurant} />
        <ReviewIndex restaurant={this.props.restaurant} />
      </section>
    );
}

};

export default withRouter(RestaurantShowPage);
