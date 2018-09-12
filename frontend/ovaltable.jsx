import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// get rid of later
import * as SessionAPIUtil from './util/session_api_util';
window.login = SessionAPIUtil.login;
window.logout = SessionAPIUtil.logout;
window.signup = SessionAPIUtil.signup;
// get rid of later

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = {};
  ReactDOM.render(<Root store={store}/>, root);



});
