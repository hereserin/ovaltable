import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const RestaurantShowBar = (props) => {

  // these will eventually link to anchors on page for the different sections
  // as of this note, the sections done exist yet
  // how do anchor tags work within react? can we use link or routes?

  return (
    <nav className='restaurant-show-nav-bar'>
      <ul>
        <li>
          <AnchorLink href="#Overview">
            Overview
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#Photos">
            Photos
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href="#Reviews">
            Reviews
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
}

export default RestaurantShowBar;
