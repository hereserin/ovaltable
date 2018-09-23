import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return ( <Route path={path} exact={exact} render={(props) => {
    return (
      !loggedIn ? (
        <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      )
    }
  }/>);
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return ( <Route path={path} exact={exact} render={(props) => {
    return (
      loggedIn ? (
        <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      )
    }
  }/>);
}

const mapStatetoProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId)
  };
};

export const AuthRoute = withRouter(connect(mapStatetoProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStatetoProps, null)(Protected));
