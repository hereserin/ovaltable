import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// get rid of later
import * as SessionAPIUtil from './util/session_api_util';
window.login = SessionAPIUtil.login;
window.logout = SessionAPIUtil.logout;
window.signup = SessionAPIUtil.signup;
// get rid of later

document.addEventListener('DOMContentLoaded', () => {
  // let preloadedState = {
  //   entities:{
  //     users: {
  //
  //     }
  //   },
  //   ui: {
  //
  //   },
  //   session: {
  //
  //   },
  // };

  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store}/>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;


});
