import React from 'react';

const PhotoShow = (props) => {
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
            <h2>HELLOOOOOOO!!!!!</h2>
            <p>how are you?</p>

          </span>
        </span>
      </span>
    </span>
  </div>
);
};



export default PhotoShow;
