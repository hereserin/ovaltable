// navbar here
import { Link } from 'react-router-dom';
import GreetingContainer from './../greeting/greeting_container';
import React from 'react';


const NavBar = (props) => {

  return (
    <nav className="nav-bar">
      <ul className='left-nav-links'>
        <li>OvalTable</li>
        <li>regions</li>
      </ul>
      <div className='right-nav-links'>
        <GreetingContainer />
      </div>
    </nav>
  );
};

export default NavBar;
