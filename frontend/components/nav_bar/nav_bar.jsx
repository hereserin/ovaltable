// navbar here
import { Link } from 'react-router-dom';
import GreetingContainer from './../greeting/greeting_container';
import React from 'react';
import { withRouter } from 'react-router-dom';


const NavBar = (props) => {

  return (
    <nav className="nav-bar">

      <ul className='left-nav-links'>
        <li onClick={()=>{props.history.push(`/`)}}>OvalTable</li>
        <li>regions</li>
      </ul>


        <GreetingContainer />

    </nav>
  );
};

export default withRouter(NavBar);
