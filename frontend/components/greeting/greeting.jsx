import { Link } from 'react-router-dom';
import LogoutButton from './logout_button.jsx';
import React from 'react';


const Greeting = (props) => {
  let greetingMessage;
  if ( props.currentUser ) {
    greetingMessage = (
      <div>
        <ul>
          <li>calendar</li>
          <li>Hi, {props.currentUser.username}</li>
        </ul>
        <LogoutButton logout={props.logout} />
      </div>
    );
  } else {
    greetingMessage = (
      <div>
        <Link to='/signup' className="sign-up-nav-link">Sign Up</Link>
        <Link to='/login' className="login-nav-link">Sign In</Link>
      </div>
    );
  }
  return greetingMessage;
};

export default Greeting;
