import SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const signup = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then((user) => {
      return dispatch(receiveCurrentUser(user));
    }, receiveSessionsErrors(user));
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout().then((response) => {
      return dispatch(logoutCurrentUser());
    }, receiveSessionsErrors(response));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then((user) => {
      return dispatch(receiveCurrentUser(user));
    }, receiveSessionsErrors(user));
  };
};


const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  });
};

const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER
  });
}

const receiveSessionsErrors = () => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    error: error.responseJSON
  });
}
