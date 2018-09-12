import { RECEIVE_SESSION_ERRORS } from './../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      let oldState = state;
      return oldState.concat(action.error);
    default:
      return state;
  }
};

export default sessionErrorsReducer;
