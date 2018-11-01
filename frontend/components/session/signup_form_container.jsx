import { connect } from "react-redux";
import { signup, loginDefault } from "./../../actions/session_actions";
import { closeModal, openModal } from "./../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    currentUserId: state.session.id,
    formType: "signup",
    formTitle: "Welcome to OvalTable!"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => {
      dispatch(signup(user));
    },
    processDemo: user => {
      dispatch(loginDefault());
    },
    closeModal: modal => dispatch(closeModal()),
    openModal: type => dispatch(openModal(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
