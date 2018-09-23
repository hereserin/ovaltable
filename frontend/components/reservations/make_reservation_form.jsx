import React from 'react';

class MakeReservationForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {

      party_size: 2,
      date: undefined,
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
      const default_time_slot = this.props.hoursOfOperation[first_time_slot].drop_down_time;
      this.setState({time: default_time_slot });
    }
  }

  handleChange(type) {
    return (e) => {
        this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newReservation = Object.assign({}, this.state)
    // this.props.clearErrors();
    // debugger
    this.props.submitReservation(newReservation);

    // this.props.history.push(`/reservations/${}`)
    this.props.history.push(`/user/${[this.props.currentUserId]}/reservations`)

  }

  errorsList() {

    const currentErrors = this.props.errors.map((error, idx) => {
      return (
        <li key={idx}>{error}</li>
      );
    });
    return (
      <ul className='form-errors'>
        {currentErrors}
      </ul>
    );
  }

  render() {
    // debugger
    if (!this.props.restaurant.hours_of_operation_ids) return <div></div>;



    let party_size_arr = []
    for (var i = 2; i < 21; i++) {
      party_size_arr.push(i)
    }
    // debugger

    let party_size_options = party_size_arr.map((num, idx)=>(
      <option key={idx} value={num}>{num} people</option>
    ));


    let dropDownTime = this.props.restaurant.hours_of_operation_ids.map((hour_id, idx)=>(
        <option key={idx} value={this.props.hoursOfOperation[hour_id].drop_down_time}> {this.props.hoursOfOperation[hour_id].drop_down_time} </option>
      )
    );



    return (

      <form className='make-res-form' onSubmit={this.handleSubmit}>
        <h2>Make a reservation </h2>
        <ul>{this.errorsList()}</ul>

        <label>Party Size
          <select className='party-size-res' onChange={this.handleChange('party_size')}>
            <option value='1'>1 person</option>
            {party_size_options}
          </select>
        </label>

        <div>
          <label>Date
            <input type='date' className='date-search-res' onChange={this.handleChange('date')} />
          </label>

          <label>Time
            <select className='time-search-res' onChange={this.handleChange('time')}>
              {dropDownTime}
            </select>
          </label>
        </div>

        <button className='reservation-submit-button'>Find a Table</button>
      </form>
    );
  }
};

export default MakeReservationForm;
