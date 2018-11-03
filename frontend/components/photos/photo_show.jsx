import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearPhoto } from "./../../actions/photo_show_actions";
import { openModal, closeModal } from "./../../actions/modal_actions";

const PhotoShow = props => {
  let caption = "My very favorite picture.";
  if (props.caption) {
    caption = props.caption;
  }

  return (
    <div>
      <span className="photo-show-modal">
        <span
          className="photo-show-modal-screen"
          onClick={() => {
            props.clearPhoto();
            props.closeModal();
          }}
        >
          <span
            className="photo-show-modal-box"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <span className="show-photo-span">
              <img className="show-photo" src={props.showPhotoUrl} />
              <p className="show-photo-caption">{caption}</p>
              <div className="show-photo-user">
                <p>Photo by {props.author}</p>
              </div>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

const mapStateToProps = ({ ui, entities }) => {
  return {
    showPhotoUrl: entities.photos[ui.showPhoto.photo].photoUrl,
    caption: entities.photos[ui.showPhoto.photo].caption,
    author: entities.users[ui.showPhoto.author].username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearPhoto: () => dispatch(clearPhoto()),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhotoShow)
);
