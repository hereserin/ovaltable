import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.notThisFormLink = this.notThisFormLink.bind(this);
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.notThisFormString = this.notThisFormString.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }
  //
  // handleUsernameChange(e) {
  //   this.setState({ username: e.target.value });
  // }
  //
  // handlePasswordChange(e) {
  //   this.setState({ password: e.target.value });
  // }

  handleSubmit(e) {
    e.preventDefault();
    if ( this.props.currentUserId ) {
      //redirect to
    }
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({password: ""});
  }

  errorsList() {

    const currentErrors = this.props.errors.map((error, idx) => {
      return (
        <li key={idx}>{error}</li>
      );
    });
    return (
      <ul>
        {currentErrors}
      </ul>
    );
  }

  notThisFormLink() {
    if ( this.props.formType === 'login') {
      return (
      <Link to='/signup'>Sign Up</Link>
      );
    }
    return (
      <Link to='/login'>Login</Link>
    );
  }

  // notThisFormString() {
  //   if ( this.props.formType === 'login') {
  //     return '/signup';
  //   }
  //   return '/login';
  // }

  render() {
    return (
      <div>
        <span className='session-form-modal'>
          <span className='session-form-modal-screen'>
            <span className='session-form-modal-box'>
              <span className='session-form'>
                <h2>{this.props.formTitle}</h2>
                <ul>{this.errorsList()}</ul>
                <form onSubmit={this.handleSubmit} >
                  <input type='text' placeholder="email" className='session-form-modal-box-input' value={this.state.username} onChange={this.handleChange('username')} />
                  <br></br>
                  <input type='password' placeholder="password" className='session-form-modal-box-input' value={this.state.password} onChange={this.handleChange('password')} />
                  <br></br>
                  <button className='session-form-modal-box-button'>{this.props.formType}</button>
                </form>
                {this.notThisFormLink()}
              </span>
            </span>
          </span>
        </span>
      </div>
    );

  }
}

export default SessionForm;
