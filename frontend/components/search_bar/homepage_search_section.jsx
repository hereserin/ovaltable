// search bar
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from './search_bar';



const HomepageSearchSection = (props) => {

    return (
      <div>
        <fieldset className='home-search-box'>
          <h2 className='home-search-message'>
            Find your table for any occasion
          </h2>
          <SearchBar />
        </fieldset>
      </div>
    );

};


export default HomepageSearchSection;
