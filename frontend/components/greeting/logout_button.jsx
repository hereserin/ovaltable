import React from 'react';

const LogoutButton = (props) => {
  return (
    <button onClick={props.logout} className='logout-button'>Log Out</button>
  );
};

export default LogoutButton;
