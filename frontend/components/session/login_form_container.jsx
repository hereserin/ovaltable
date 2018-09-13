import { connect } from 'react-redux';
import { login } from './../../actions/session_actions';
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
    }
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
