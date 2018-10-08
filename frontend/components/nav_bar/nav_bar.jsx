// navbar here
import { Link } from 'react-router-dom';
import GreetingContainer from './../greeting/greeting_container';
import React from 'react';
import { withRouter } from 'react-router-dom';


const NavBar = (props) => {

  return (
    <nav className="nav-bar">
      <div className='mini-top-nav'>
      </div>

      <div className="nav-bar-main">
      <ul className='left-nav-links'>
        <li onClick={()=>{props.history.push(`/`)}}>
          <img className='oval_table_logo' src={window.staticImages.OvalTableLogo} />
        </li>
      </ul>


        <GreetingContainer />

      </div>
    </nav>
  );
};

export default withRouter(NavBar);
