import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import { Route } from 'react-router-dom';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    // debugger 
  }

  // componentDidMount() {
  //   // debugger
  //   this.props.fetchRestaurants();
  // }

  // componentWillMount() {
  //   debugger
  // }

  render() {
    // debugger
    if(!this.props.restaurants) return null;

    const restaurants = this.props.restaurants.map((restaurant) => {
      <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />
    });

    return (
        <section>
          <ul>
            <li>Hi!</li>
            {restaurants}
          </ul>
        </section>
    );
  }
}

export default RestaurantIndex;
