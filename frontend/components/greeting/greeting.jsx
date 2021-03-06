import { Link, withRouter } from "react-router-dom";
import LogoutButton from "./logout_button.jsx";
import React from "react";

const Greeting = props => {
  let greetingMessage;

  const goToReservationsIndex = () => {
    props.history.push(`/user/${[props.currentUser.id]}/reservations`);
    props.fetchReservations();
  };

  if (props.currentUser) {
    greetingMessage = (
      <div>
        <ul className="right-nav-links">
          <li>
            <i
              className="far fa-calendar-alt cal-icon"
              onClick={goToReservationsIndex}
            />
          </li>
          <li>Hi, {props.currentUser.username}</li>
          <LogoutButton logout={props.logout} />
        </ul>
      </div>
    );
  } else {
    const openSignUpModal = () => {
      return props.openModal("signup");
    };
    const openSignInModal = () => {
      return props.openModal("login");
    };

    greetingMessage = (
      <div>
        <button className="sign-up-nav-link" onClick={openSignUpModal}>
          Sign Up
        </button>
        <button className="login-nav-link" onClick={openSignInModal}>
          Sign In
        </button>
      </div>
    );
  }
  return greetingMessage;
};

// commented out stuff:
// <Link to='/signup' className="sign-up-nav-link">Sign Up</Link>
// <Link to='/login' className="login-nav-link">Sign In</Link>

export default withRouter(Greeting);
