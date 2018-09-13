import React from 'react';

const LogoutButton = (props) => {
  return (
    <button onClick={props.logout}>Log Out</button>
  );
};

export default LogoutButton;
