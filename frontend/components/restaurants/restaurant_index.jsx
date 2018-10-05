import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import { Route } from 'react-router-dom';

class RestaurantIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    if(this.props.restaurants.length == 0) return <div></div>;

    const restaurants = this.props.restaurants.map((restaurant, idx) => {
      return (
        <RestaurantIndexItem key={idx} restaurant={restaurant} />
        );
    });

    return (
        <section>
          <p>Results:</p>
          <ul>
            {restaurants}
          </ul>
        </section>
    );
  }
}

export default RestaurantIndex;
