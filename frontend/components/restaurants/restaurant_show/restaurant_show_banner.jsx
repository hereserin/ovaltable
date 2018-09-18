import React from 'react';

const RestaurantShowBanner = (props) => {
  let bannerImage = undefined;
  if (!props.restaurant.banner_image) {}
    bannerImage =  <div class="main-restaurant-show-banner" style={{backgroundImage: `url(${window.staticImages.defaultRestaurantBanner})`}} />
  return (
    bannerImage
  );
};

export default RestaurantShowBanner;
