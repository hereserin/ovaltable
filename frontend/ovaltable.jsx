import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// get rid of later: THIS IS FOR TESTING
// import * as SessionAPIUtil from './util/session_api_util';
import { login, signup, logout } from './actions/session_actions';
window.login = login;
window.signup = signup;
window.logout = logout;
import { fetchRestaurant, fetchRestaurants } from './actions/restaurant_actions';
window.fetchRestaurant = fetchRestaurant;
window.fetchRestaurants = fetchRestaurants;
// window.logout = SessionAPIUtil.logout;
// window.signup = SessionAPIUtil.signup;
// get rid of later: THIS IS FOR TESTING

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id },
    };

    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore();
  }


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

// get rid of later
  window.getState = store.getState;
  window.dispatch = store.dispatch;
// get rid of later

});
