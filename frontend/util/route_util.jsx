import React from 'react';
import ( connect ) from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = () => {
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

const Protected = () => {

}

const mapStatetoProps = () => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

export const AuthRoute = withRouter(connect(mapStatetoProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStatetoProps, null)(Protected));
