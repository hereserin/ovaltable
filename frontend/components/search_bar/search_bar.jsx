import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchRestaurants,
  searchRestaurants
} from "./../../actions/restaurant_actions";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.decidePlaceholder = this.decidePlaceholder.bind(this);
    this.parseUrlToUserInput = this.parseUrlToUserInput.bind(this);

    this.state = {
      searchTextInput: ""
    };
  }

  componentDidMount() {
    // TODO: make ajax request once the searchBar mounts, grab info from url
  }

  handleSubmit() {
    this.props.searchRestaurants({ query: "anything" });
    this.props.history.push(`/search/${"this+is+my+search"}`);

    // this.props.fetchRestaurants().then(({ restaurants, photos }) => {
    //   this.setState({ restaurants, photos });
    // });
  }

  decidePlaceholder() {
    const placeholder = this.props.match.params.query
      ? this.parseUrlToUserInput()
      : "Search Restaurants";
    return placeholder;
  }

  parseUrlToUserInput() {
    const urlQuery = this.props.match.params.query;
    return urlQuery.replace(/[^A-Za-z0-9]/g, " ");
  }

  parseUserInputToUrl(userInputQuery) {
    return userInputQuery.replace(/[^A-Za-z0-9]/g, "+");
  }

  handleSearchTextInput(e) {
    return this.setState({
      searchTextInput: e.currentTarget.value
    });
  }

  render() {
    let classStyle = "results-search-box";
    if (["/"].includes(this.props.location.pathname)) {
      classStyle = "just-search-box-home";
    }

    return (
      <fieldset className={classStyle}>
        <span className="date-time-person-holder">
          <input type="date" className="date-search" />

          <select className="time-search">
            <option value="11:00">11:00 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
          </select>

          <select className="people-search">
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
          </select>
        </span>
        <input
          type="text"
          placeholder={this.decidePlaceholder()}
          className="search-bar-text"
          value={this.state.searchTextInput}
          onChange={this.handleSearchTextInput}
        />

        <button className="search-submit-button" onClick={this.handleSubmit}>
          Let's go
        </button>
      </fieldset>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => {
      return dispatch(fetchRestaurants());
    },
    searchRestaurants: query => {
      return dispatch(searchRestaurants(query));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SearchBar)
);
