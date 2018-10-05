import React from 'react'

const RestaurantPhotos = (props) => {


  const picItems = props.photos.map((photo, idx) => {
    return (
      <li >
        <img key={idx} src={photo.photoUrl} />
      </li>
      );
  });

  return (
    <ul className='photos-list'>
      <h2>Photos</h2>
        {picItems}
    </ul>
  );
};

export default RestaurantPhotos;
