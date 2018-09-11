import SessionAPIUtil from '../util/session_api_util';

const signup = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then((user ) => {

    });
  };
};
