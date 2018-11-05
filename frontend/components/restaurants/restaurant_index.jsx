import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import { Route } from "react-router-dom";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: null,
      photos: null
    };
  }

  componentDidMount() {
    this.props.fetchRestaurants().then(({ restaurants, photos }) => {
      this.setState({ restaurants, photos });
    });
  }

  render() {
    if (!this.state.restaurants) return null;

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
