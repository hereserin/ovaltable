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
    };
  }

  handleChange(type) {
    return (e) => {
        this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newReservation = Object.assign({}, this.state)
    this.props.submitReservation(newReservation);
  }

  render() {
    let party_size_arr = []
    for (var i = 2; i < 21; i++) {
      party_size_arr.push(i)
    }
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

        <button className='reservation-submit-button' onClick={()=>{this.props.history.push('/restaurants')}}>Find a Table</button>
      </form>
    );
  }
};

export default MakeReservationForm;
