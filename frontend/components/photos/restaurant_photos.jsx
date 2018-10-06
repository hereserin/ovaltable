import React from 'react'

const RestaurantPhotos = (props) => {


  const picItems = props.photos.map((photo, idx) => {
    return (
      <li key={idx}>
        <div className='photos-list-divs' style={{backgroundImage: `url(${photo.photoUrl})`}} />
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

export default RestaurantPhotos;



// <img key={idx} src={photo.photoUrl} />
