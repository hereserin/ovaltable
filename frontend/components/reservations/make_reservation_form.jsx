import React from 'react';

class MakeReservationForm extends React.Component {
  render() {
    return (
      <fieldset className='make-res-form'>
        <h2>Make a reservation </h2>

        <label>Party Size
          <select>
            <option value='1'>1 person</option>
            <option value='2'>2 people</option>
            <option value='3'>3 people</option>
          </select>
        </label>

        <div>
          <label>Date
            <input type='date' />
          </label>

          <label>Time
            <select>
              <option value='13:00'>1:00 PM </option>
              <option value='14:00'>2:00 PM </option>
              <option value='15:00'>3:00 PM </option>
            </select>
          </label>
        </div>

      </fieldset>
  );
}
}

export default MakeReservationForm;
