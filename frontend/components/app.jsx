import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBar from './nav_bar/nav_bar';
import SearchBar from './search_bar/search_bar';
import { AuthRoute, ProtectedRoute } from './../util/route_util.jsx';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
        <SearchBar />
      </header>


      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
  );
};


export default App;
