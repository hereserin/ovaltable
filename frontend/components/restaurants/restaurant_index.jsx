import React from 'react';
import RestaurantIndexItem from './restaurant_index_item'

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  componentWillMount() {
    debugger 
  }

  render() {
    debugger
    const restaurants = this.props.restaurants.map((restaurant) => {
      <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />
    });

    return (
        <section>
          <ul>
            {restaurants}
          </ul>
        </section>
    );
  }
}

export default RestaurantIndex;
