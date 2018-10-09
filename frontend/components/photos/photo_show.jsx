import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearPhoto } from './../../actions/photo_show_actions';
import { openModal, closeModal } from './../../actions/modal_actions';


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
                // debugger
                props.closeModal();
                // props.history.goBack();
            }}>
            <span className='photo-show-modal-box' onClick={(e)=> {
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
    clearPhoto: () => dispatch(clearPhoto()),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
