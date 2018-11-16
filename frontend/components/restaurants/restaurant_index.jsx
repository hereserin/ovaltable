import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import { Route } from "react-router-dom";
import Spinner from "../spinner/spinner.jsx";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.getQueryFromUrl = this.getQueryFromUrl.bind(this);
    this.state = {
      restaurants: null,
      photos: null
    };
  }

  getQueryFromUrl() {
    return this.props.match.params.query;
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
        <p>Search results for: {this.getQueryFromUrl()}</p>
        <ul>{restaurants}</ul>
      </section>
    );
  }
}

export default RestaurantIndex;
