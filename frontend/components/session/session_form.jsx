import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.notThisFormLink = this.notThisFormLink.bind(this);
    this.handleChange = this.handleChange.bind(this);

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


  handleSubmit(inputType) {
    return ((e) => {
      // debugger
      e.preventDefault();
      if ( this.props.currentUserId ) {
        //redirect to
      }
      // debugger
      const user = Object.assign({}, this.state);

      if ( inputType === 'demo') {
        this.props.processDemo();
      } else {
        this.props.processForm(user);
      }
      this.setState({password: ""});
    });
  }


  errorsList() {

    const currentErrors = this.props.errors.map((error, idx) => {
      return (
        <li key={idx}>{error}</li>
      );
    });
    return (
      <ul className='form-errors'>
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

  render() {
    let inputClass = 'session-form-modal-box-input';
    if (Object.keys(this.props.errors).length > 0 ) {
      inputClass = 'session-form-modal-box-input-with-errors'
    };

    return (
      <div>
        <span className='session-form-modal'>
          <span className='session-form-modal-screen' onClick={() => {
              this.props.history.push('/');
            }} >
            <span className='session-form-modal-box' onClick={e => {
                e.stopPropagation();
              }}>
              <span className='session-form'>
                <h2>{this.props.formTitle}</h2>
                <ul>{this.errorsList()}</ul>
                <form onSubmit={this.handleSubmit('user')} >
                  <input type='text' placeholder="email" className={inputClass} value={this.state.username} onChange={this.handleChange('username')} />
                  <br></br>
                  <input type='password' placeholder="password" className={inputClass} value={this.state.password} onChange={this.handleChange('password')} />
                  <br></br>
                  <button className='session-form-modal-box-button'>{this.props.formType}</button>
                </form>
                <form onSubmit={this.handleSubmit('demo')} >
                  <button className='session-form-modal-box-button-demo'>demo user</button>
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
