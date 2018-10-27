import { connect } from "react-redux";
import { login, loginDefault } from "./../../actions/session_actions";
import { closeModal, openModal } from "./../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    currentUserId: state.session.currentUserId,
    formType: "login",
    formTitle: "Please sign in"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => {
      dispatch(login(user));
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
