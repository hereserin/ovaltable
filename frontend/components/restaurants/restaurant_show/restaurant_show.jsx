import React from "react";
import RestaurantInfo from "./restaurant_info";
import RestaurantPhotos from "./../../photos/restaurant_photos";
import ReviewsIndex from "./../../reviews/reviews_index";
import MakeReservationFormContainer from "./../../reservations/make_reservation_form_container";
import RestaurantShowBanner from "./restaurant_show_banner";
import RestaurantShowBar from "./restaurant_show_bar";
import { withRouter } from "react-router-dom";
import Spinner from "../../spinner/spinner.jsx";

class RestaurantShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      photos: null,
      reviews: null
    };
  }
  componentDidMount() {
    this.props
      .fetchRestaurant(this.props.match.params.restaurantId)
      .then(payload => {
        this.setState({
          photos: payload.photos,
          reviews: payload.reviews,
          restaurant: payload.restaurant
        });
      });
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (
      this.state.restaurant == undefined ||
      this.state.restaurant.photos == undefined
    ) {
      return <Spinner />;
    }

    return (
      <div>
        <RestaurantShowBanner restaurant={this.props.restaurant} />

        <main className="main-restaurant-show-page">
          <section className="restaurant-show-section-holder">
            <RestaurantShowBar />
            <div id="Overview">
              <ul className="restaurant-description">
                <li>
                  <h1>{this.props.restaurant.restaurant_name}</h1>
                </li>
                <li>
                  <p>{this.props.restaurant.restaurant_description}</p>
                </li>
              </ul>
            </div>

            <div id="Photos">
              <RestaurantPhotos
                photos={this.props.photos}
                restaurantPicIds={this.props.restaurant.photos}
              />
            </div>

            <div id="Reviews">
              <ReviewsIndex
                reviews={this.props.reviews}
                restaurantReviewIds={this.props.restaurant.reviews}
              />
            </div>
          </section>

          <aside>
            <MakeReservationFormContainer />
            <RestaurantInfo
              restaurant={this.props.restaurant}
              hours={this.props.hoursOfOperation}
            />
          </aside>
        </main>
      </div>
    );
  }
}

export default withRouter(RestaurantShowPage);
