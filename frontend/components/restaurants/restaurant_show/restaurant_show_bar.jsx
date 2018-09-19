import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const RestaurantShowBar = (props) => {

  // these will eventually link to anchors on page for the different sections
  // as of this note, the sections done exist yet
  // how do anchor tags work within react? can we use link or routes?

  return (
    <nav className='restaurant-show-nav-bar'>
      <ul>
        <li>Overviews, Photos, Reviews</li>
        <li>Photos</li>
        <li>Reviews</li>
      </ul>
    </nav>
  );
}

export default RestaurantShowBar;
