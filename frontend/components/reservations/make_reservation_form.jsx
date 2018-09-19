import React from 'react';

class MakeReservationForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      party_size:
    };
  }

  handleChange() {

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className='make-res-form' onSubmit={this.handleSubmit}>
        <h2>Make a reservation </h2>

        <label>Party Size
          <select className='party-size-res'>
            <option value='1'>1 person</option>
            <option value='2'>2 people</option>
            <option value='3'>3 people</option>
          </select>
        </label>

        <div>
          <label>Date
            <input type='date' className='date-search-res' />
          </label>

          <label>Time
            <select className='time-search-res'>
              <option value='13:00'>1:00 PM </option>
              <option value='14:00'>2:00 PM </option>
              <option value='15:00'>3:00 PM </option>
            </select>
          </label>
        </div>

        <button className='reservation-submit-button' onClick={()=>{this.props.history.push('/restaurants')}}>Find a Table</button>
      </form>
    );
  }
};

export default MakeReservationForm;
