import React from "react";

const RestaurantShowBanner = props => {
  let bannerImage = undefined;
  if (!props.restaurant.banner_image) {
  }
  bannerImage = (
    <div
      className="main-restaurant-show-banner"
      style={{
        backgroundImage: `url(${window.staticImages.defaultRestaurantBanner2})`
      }}
    />
  );
  return bannerImage;
};

export default RestaurantShowBanner;
