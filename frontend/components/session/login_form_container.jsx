import { connect } from 'react-redux';
import { login, loginDefault  } from './../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.session,
    currentUserId: state.session.id,
    formType: 'login',
    formTitle: 'Please sign in'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => {
      dispatch(login(user));
    },
    processDemo: (user) => {
      dispatch(loginDefault());
    }
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
