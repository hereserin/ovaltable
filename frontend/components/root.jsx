import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';


// give store as argument:
const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
      <App />
      </HashRouter>
    </Provider>
  );
};


export default Root;
