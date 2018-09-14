import { connect } from 'react-redux';
import { signup } from './../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {

  return ({
    errors: state.errors.session,
    currentUserId: state.session.id,
    formType: 'signup',
    formTitle: 'Welcome to OvalTable!'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => {
      dispatch(signup(user));
    }
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
