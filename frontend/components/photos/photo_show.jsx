import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearPhoto } from "./../../actions/photo_show_actions";
import { deletePhoto } from "./../../actions/photos_actions";
import { openModal, closeModal } from "./../../actions/modal_actions";

const PhotoShow = props => {
  let caption = "My very favorite picture.";
  if (props.caption) {
    caption = props.caption;
  }

  let deletePhotoButton;
  if (props.currentUserId === props.authorId) {
    deletePhotoButton = (
      <span
        className="delete-photo-button"
        onClick={() => {
          props.deletePhoto(props.photoId, props.restaurantId);
          // props.clearPhoto();
          props.closeModal();
        }}
      >
        Delete
      </span>
    );
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
                <p>
                  Photo by {props.author}
                  <br />
                  {deletePhotoButton}
                </p>
              </div>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

const mapStateToProps = ({ ui, entities, session }) => {
  return {
    showPhotoUrl: entities.photos[ui.showPhoto.photo].photoUrl,
    caption: entities.photos[ui.showPhoto.photo].caption,
    author: entities.users[ui.showPhoto.author].username,
    authorId: ui.showPhoto.author,
    currentUserId: session.id,
    photoId: ui.showPhoto.photo,
    restaurantId: entities.photos[ui.showPhoto.photo].restaurant_id
  };
};

const mapDispatchToProps = dispatch => {
  // debugger;
  return {
    clearPhoto: () => dispatch(clearPhoto()),
    closeModal: () => dispatch(closeModal()),
    deletePhoto: (id, restId) => dispatch(deletePhoto(id, restId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhotoShow)
);
