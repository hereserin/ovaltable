import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return !loggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  // <Redirect to="/login" />
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return loggedIn ? <Component {...props} /> : <div />;
      }}
    />
  );
};

const mapStatetoProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal("login"))
  };
};

export const AuthRoute = withRouter(
  connect(
    mapStatetoProps,
    null
  )(Auth)
);
export const ProtectedRoute = withRouter(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Protected)
);
