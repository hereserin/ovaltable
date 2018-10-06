import React from 'react'
import { connect } from 'react-redux';
import { openModal } from './../../actions/modal_actions';

const RestaurantPhotos = (props) => {


  const picItems = props.photos.map((photo, idx) => {
    // debugger
    return (
      <li key={idx}>
        <div className='photos-list-divs' onClick={props.openModal} style={{backgroundImage: `url(${photo.photoUrl})`}} />
      </li>
      );
  });

  return (
    <ul>
      <h2>Photos</h2>
      <ul className='photos-list'>
        {picItems}
      </ul>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: () => dispatch(openModal("photo"))
  });
};

export default connect(null, mapDispatchToProps)(RestaurantPhotos);



// <img key={idx} src={photo.photoUrl} />
