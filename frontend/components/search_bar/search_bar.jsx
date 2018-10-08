// search bar
import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SearchBar extends React.Component {

  render() {
    // debugger
      let classStyle = 'results-search-box';
      if (['/'].includes(this.props.location.pathname)) {
        classStyle = 'just-search-box-home';
      }


      // debugger

      return (
          <fieldset className={classStyle}>

            <span className='date-time-person-holder'>
              <input type='date' className="date-search" />

              <select className='time-search'>
                <option value='11:00'>11:00 AM</option>
                <option value='11:30'>11:30 AM</option>
                <option value='12:00'>12:00 PM</option>
                <option value='12:30'>12:30 PM</option>
                <option value='13:00'>1:00 PM</option>
                <option value='13:30'>1:30 PM</option>
              </select>

              <select className='people-search'>
                <option value='1'>1 person</option>
                <option value='2'>2 people</option>
                <option value='3'>3 people</option>
              </select>
            </span>
            <input type='text' placeholder='Search Restaurants' className='search-bar-text'></input>

            <button className='search-submit-button' onClick={()=>{this.props.history.push('/restaurants')}}>Let's go</button>
          </fieldset>
      );

    };

  }

export default withRouter(SearchBar);
