import { connect } from 'react-redux';
import { signup } from './../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  debugger 
  return ({
    errors: state.errors.session,
    currentUserId: state.session.id,
    formType: 'signup',
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
