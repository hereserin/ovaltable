import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import { Route } from 'react-router-dom';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.restaurants)
    this.props.fetchRestaurants();
    // this.setState()
    console.log("testingtesting123")
    console.log(this.props.restaurants)

  }

  // componentWillMount() {
  //   debugger
  // }

  render() {
    // debugger
    // if(!this.props.restaurants) return null;
    console.log(this.props.restaurants)
    const restaurants = this.props.restaurants.map((restaurant, idx) => {
      console.log(restaurant);
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
