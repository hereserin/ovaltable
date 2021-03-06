import React from "react";
import { connect } from "react-redux";
import { openModal } from "./../../actions/modal_actions";
import { showPhoto, clearPhoto } from "./../../actions/photo_show_actions";
import { AuthRoute, ProtectedRoute } from "./../../util/route_util.jsx";
import { withRouter } from "react-router-dom";

const RestaurantPhotos = props => {
  const picItems = props.restaurantPicIds.map((photoId, idx) => {
    const eachPhotoUrl = props.photos[photoId].photoUrl;
    return (
      <li key={idx}>
        <div
          className="photos-list-divs"
          onClick={() => {
            props.showPhoto(props.photos[photoId]);
            props.openModalShowPic();
          }}
          style={{ backgroundImage: `url(${eachPhotoUrl})` }}
        />
      </li>
    );
  });

  return (
    <div className="photo-section-div">
      <h2 className="photo-title">Photos</h2>
      <ul className="photos-list">{picItems}</ul>

      <ProtectedRoute
        component={() => {
          return (
            <p className="post-photo-link" onClick={props.openModalPhotoForm}>
              Add Photo
            </p>
          );
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const restaurantId = parseInt(ownProps.location.pathname.split("/")[2]);
  return {
    restaurantPicIds: state.entities.restaurants[restaurantId].photos,
    photos: state.entities.photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModalShowPic: () => dispatch(openModal("photo")),
    openModalPhotoForm: () => dispatch(openModal("photo form")),
    showPhoto: clickedPhoto => dispatch(showPhoto(clickedPhoto)),
    clearPhoto: () => dispatch(clearPhoto())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RestaurantPhotos)
);
