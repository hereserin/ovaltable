import React from 'react'
import { connect } from 'react-redux';
import { openModal } from './../../actions/modal_actions';
import { showPhoto, clearPhoto } from './../../actions/photo_show_actions';

const RestaurantPhotos = (props) => {

// if i comment this back in---i need to delete 'props'
//
  // const picItems2 = props.photos.map((photo, idx) => {
  //   // debugger
  //   return (
  //     <li key={idx}>
  //       <div className='photos-list-divs' onClick={() => {
  //         props.showPhoto(photo)
  //         props.openModal();
  //       }} style={{backgroundImage: `url(${photo.photoUrl})`}} />
  //     </li>
  //   );
  // });
  // debugger
  // ******

  const picItems = props.restaurantPicIds.map((photoId, idx) => {
    const eachPhotoUrl = props.photos[photoId].photoUrl;

    return (
      <li key={idx}>
        <div className='photos-list-divs' onClick={() => {
          props.showPhoto(props.photos[photoId])
          props.openModalShowPic();
        }} style={{backgroundImage: `url(${eachPhotoUrl})`}} />
      </li>
    );
  });

  return (
    <div>
      <h2>Photos</h2>
      <ul className='photos-list'>
        {picItems}
      </ul>
      <p className='post-photo-link' onClick={props.openModalPhotoForm}>Add Photo</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModalShowPic: () => dispatch(openModal("photo")),
    openModalPhotoForm: () => dispatch(openModal("photo form")),
    showPhoto: (clickedPhoto) => dispatch(showPhoto(clickedPhoto)),
    clearPhoto: () => dispatch(clearPhoto())
  });
};

export default connect(null, mapDispatchToProps)(RestaurantPhotos);



// <img key={idx} src={photo.photoUrl} />
