import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import ReservationIndexContainer from './reservations/reservation_index_container';
import RestaurantShowPageContainer from './restaurants/restaurant_show/restaurant_show_container';
import ReservationShowPage from './reservations/reservations_show';
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
          <Route path='/login/' component={HomepageSearchSection} />
          <Route path='/signup/' component={HomepageSearchSection} />
          <Route exact path='/restaurants' component={RestaurantIndexSearchSection} />
        </Switch>
        <Route exact path='/' component={HomepageSearchSection} />
      </header>
      <main className='main-component'>
        <Route exact path="/restaurants" component={RestaurantIndexContainer} />

        <Route path="/restaurants/:restaurantId" component={RestaurantShowPageContainer} />

        <Route path="/reservations" component={ReservationShowPage} />

        <Route path="/user/:userId/reservations/" component={ReservationIndexContainer} />



        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
      </main>
    </div>
  );
};


export default App;
