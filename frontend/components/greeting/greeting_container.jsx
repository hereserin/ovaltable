import { connect } from "react-redux";
import { logout } from "./../../actions/session_actions";
import { openModal } from "./../../actions/modal_actions";
import { fetchReservations } from "./../../actions/reservations_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities }) => {
  return {
    currentUser: entities.users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchReservations: () => dispatch(fetchReservations())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
