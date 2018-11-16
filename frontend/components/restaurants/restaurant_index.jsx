import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import { Route } from "react-router-dom";
import Spinner from "../spinner/spinner.jsx";
import * as QueryParsers from "../search_bar/search_query_parsers";

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
    const queryFromUrl = this.props.match.params.query;
    const queryText = QueryParsers.parseUrlToUserInput(queryFromUrl);
    if (queryText.length === 1) {
      // equal to 1 b/c the equal sign will leave 1 blank (space) char
      return "(blank)";
    }
    return queryText;
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
        <p>
          Search results for: <strong>{this.getQueryFromUrl()}</strong>
        </p>
        <ul>{restaurants}</ul>
      </section>
    );
  }
}

export default RestaurantIndex;
