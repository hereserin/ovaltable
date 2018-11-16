import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import { Route } from "react-router-dom";
import Spinner from "../spinner/spinner.jsx";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: null,
      photos: null
    };
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    const restaurants = this.props.restaurants.map(restaurant => (
      <RestaurantIndexItem
        key={restaurant.id}
        restaurant={restaurant}
        photos={this.props.photos}
      />
    ));

    return (
      <section>
        <p>Results:</p>
        <ul>{restaurants}</ul>
      </section>
    );
  }
}

export default RestaurantIndex;
