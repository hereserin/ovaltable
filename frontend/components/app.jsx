import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import NavBar from './nav_bar/nav_bar';
import HomepageSearchSection from './search_bar/homepage_search_section';
import RestaurantIndexSearchSection from './search_bar/restaurant_index_search_section';
import { AuthRoute, ProtectedRoute } from './../util/route_util.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomepageSearchSection} />
          <Route exact path='/restaurants' component={RestaurantIndexSearchSection} />
        </Switch>
      </header>
      <Route path="/restaurants" component={RestaurantIndexContainer} />

      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
  );
};


export default App;
