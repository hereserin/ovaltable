import { connect } from 'react-redux';
import { logout } from './../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities }) => {
  return (
    {
      currentUser: entities.users[session.currentUserId]
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
