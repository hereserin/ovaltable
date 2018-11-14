import React from "react";

class MakeReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.errors = null;

    this.state = {
      party_size: 2,
      date: "12:30 AM",
      time: undefined,
      restaurant_id: this.props.match.params.restaurantId
    };
  }

  componentDidMount() {
    // debugger
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
    this.setFirstState();
  }

  setFirstState() {
    if (this.props.restaurant.hours_of_operation_ids) {
      const first_time_slot = this.props.restaurant.hours_of_operation_ids[0];
      const default_time_slot = this.props.hoursOfOperation[first_time_slot]
        .drop_down_time;
      this.setState({ time: default_time_slot });
    }
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newReservation = Object.assign({}, this.state);
    // this.props.clearErrors();

    this.props.submitReservation(newReservation).then(
      reservation => {
        this.props
          .fetchReservations()
          .then(
            () =>
              this.props.history.push(
                `/user/${[this.props.currentUserId]}/reservations`
              ),
            () =>
              this.props.history.push(
                `/user/${[this.props.currentUserId]}/reservations`
              )
          );
      },
      errors => this.renderErrors(errors)
    );

    // this.props.history.push(`/reservations/${}`)
  }

  renderErrors(errors) {
    const errorsListItems = errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    this.errors = <ul className="form-errors">{errorsListItems}</ul>;
  }
  // errorsList() {
  //   const currentErrors = this.props.errors.map((error, idx) => {
  //     return <li key={idx}>{error}</li>;
  //   });
  //   return <ul className="form-errors">{currentErrors}</ul>;
  // }

  render() {
    // debugger
    if (!this.props.restaurant.hours_of_operation_ids) return <div />;

    let party_size_arr = [];
    for (var i = 2; i < 21; i++) {
      party_size_arr.push(i);
    }
    // debugger

    let party_size_options = party_size_arr.map((num, idx) => (
      <option key={idx} value={num}>
        {num} people
      </option>
    ));

    let dropDownTime = this.props.restaurant.hours_of_operation_ids.map(
      (hour_id, idx) => (
        <option
          key={idx}
          value={this.props.hoursOfOperation[hour_id].drop_down_time}
        >
          {" "}
          {this.props.hoursOfOperation[hour_id].drop_down_time}{" "}
        </option>
      )
    );

    let todaysDate = new Date().toISOString().split("T")[0];

    return (
      <form className="make-res-form" onSubmit={this.handleSubmit}>
        <h2>Make a reservation </h2>
        <ul>{this.errors}</ul>
        <div className="make-res-form-field-a">
          <h5>Party Size</h5>
          <label>
            <select
              className="party-size-res"
              onChange={this.handleChange("party_size")}
            >
              <option value="1">1 person</option>
              {party_size_options}
            </select>
          </label>
        </div>

        <div>
          <div className="make-res-form-field-b">
            <h5>Date</h5>
            <label>
              <input
                type="date"
                className="date-search-res"
                min={todaysDate}
                onChange={this.handleChange("date")}
              />
            </label>
          </div>

          <div className="make-res-form-field-b">
            <h5>Time</h5>
            <label>
              <select
                className="time-search-res"
                onChange={this.handleChange("time")}
              >
                {dropDownTime}
              </select>
            </label>
          </div>
        </div>

        <button className="reservation-submit-button">Reserve a Table</button>
      </form>
    );
  }
}

export default MakeReservationForm;
