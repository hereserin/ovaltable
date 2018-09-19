import React from 'react';

class MakeReservationForm extends React.Component {
  render() {
    return (
      <fieldset className='make-res-form'>
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
      </fieldset>
    );
  }
};

export default MakeReservationForm;
