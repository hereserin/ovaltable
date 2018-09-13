import { Link } from 'react-router-dom';
import LogoutButton from './logout_button.jsx';
import React from 'react';


const Greeting = (props) => {
  let greetingMessage;
  if ( props.currentUser ) {
    greetingMessage = (
      <div>
        <h3>Welcome to OvalTable, {props.currentUser.username}</h3>
        <LogoutButton logout={props.logout} />
      </div>
    );
  } else {
    greetingMessage = (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
  return greetingMessage;
};

export default Greeting;
