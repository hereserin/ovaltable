import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from './../util/route_util.jsx';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1>Hi.</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
  );
};


export default App;
