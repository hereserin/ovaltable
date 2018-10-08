import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearPhoto } from './../../actions/photo_show_actions';


const PhotoShow = (props) => {

  let caption = "My very favorite picture.";
  if (props.showPhoto.caption) {
    caption = props.showPhoto.caption;
  }

  return (
      <div>
          <span className='photo-show-modal'>
            <span className='photo-show-modal-screen' onClick={() => {
                props.clearPhoto();
                props.history.push('/');
            }}>
            <span className='photo-show-modal-box' onClick={e => {
                  e.stopPropagation();
            }}>
            <span className='show-photo-span'>
              <img className='show-photo' src={props.showPhoto.photoUrl} />
              <p>{caption}</p>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

const mapStateToProps = ({ ui }) => {
  return ({
    showPhoto: ui.showPhoto
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    clearPhoto: () => dispatch(clearPhoto())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
