import React from "react";
import { Provider } from "react-redux";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import RestaurantIndexContainer from "./restaurants/restaurant_index_container";
import ReservationIndexContainer from "./reservations/reservation_index_container";
import RestaurantShowPageContainer from "./restaurants/restaurant_show/restaurant_show_container";
import ReservationShowPage from "./reservations/reservations_show";
import Modal from "./modal/modal";
import NavBar from "./nav_bar/nav_bar";
import HomepageSearchSection from "./search_bar/homepage_search_section";
import RestaurantIndexSearchSection from "./search_bar/restaurant_index_search_section";
import { AuthRoute, ProtectedRoute } from "./../util/route_util.jsx";
import { Route, Switch } from "react-router-dom";
import Footer from "./footer/footer";

const App = () => {
  return (
    <div>
      <Modal />
      <section className="page-container">
        <header>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/restaurants"
              component={RestaurantIndexSearchSection}
            />
          </Switch>
          <Route exact path="/" component={HomepageSearchSection} />
        </header>
        <main className="main-component">
          <Route
            exact
            path="/restaurants"
            component={RestaurantIndexContainer}
          />

          <Route
            path="/restaurants/:restaurantId"
            component={RestaurantShowPageContainer}
          />

          <Route path="/reservations" component={ReservationShowPage} />

          <Route
            path="/user/:userId/reservations"
            component={ReservationIndexContainer}
          />
        </main>
        <Footer />
      </section>
    </div>
  );
};

// commented out stuff:

// <Route path='/login/' component={HomepageSearchSection} />
// <Route path='/signup/' component={HomepageSearchSection} />

// removing these routes & replacing with ui modal:
// <AuthRoute path='/login' component={LoginFormContainer} />
// <AuthRoute path='/signup' component={SignupFormContainer} />

export default App;
