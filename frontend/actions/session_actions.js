import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const signup = user => {
  return dispatch => {
    return SessionAPIUtil.signup(user).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveSessionsErrors(errors));
      }
    );
  };
};

export const logout = () => {
  return dispatch => {
    return SessionAPIUtil.logout().then(
      response => {
        return dispatch(logoutCurrentUser());
      },
      errors => {
        return dispatch(receiveSessionsErrors(errors));
      }
    );
  };
};

export const login = user => {
  return dispatch => {
    return SessionAPIUtil.login(user).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveSessionsErrors(errors));
      }
    );
  };
};

export const loginDefault = () => {
  return dispatch => {
    return SessionAPIUtil.login({
      username: "Demo User",
      password: "password"
    }).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveSessionsErrors(errors));
      }
    );
  };
};

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveSessionsErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
  };
};
