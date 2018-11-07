import React from "react";
import MakeReservationForm from "./../../reservations/make_reservation_form";

const RestaurantInfo = ({ restaurant, hours }) => {
  const renderIfExists = (restaurantInfoItem, itemTitleString) => {
    if (restaurantInfoItem) {
      return (
        <li>
          <h3>{itemTitleString}</h3>
          {restaurantInfoItem}
        </li>
      );
    }
  };

  // debugger
  return (
    <section>
      <section className="restaurant-info-section">
        <ul className="restaurant-info-list">
          <li>
            <ul className="rest-details-list-1">
              <li>
                <h3>Location</h3>
                {restaurant.physical_address}
              </li>
              <li>
                <h3>Dining Style</h3>
                {restaurant.dining_style}
              </li>

              {renderIfExists(
                restaurant.hours_of_operation_string,
                "Hours Of Operation"
              )}

              <li>
                <h3>Phone Number</h3>
                {restaurant.phone}
              </li>
              <li>
                <h3>Website</h3>
                {restaurant.website_url}
              </li>
              <li>
                <h3>Dress Code</h3>
                {restaurant.dress_code}
              </li>
            </ul>
          </li>

          <li>
            <ul className="rest-details-list-2" />
          </li>
        </ul>
      </section>
    </section>
  );
};

export default RestaurantInfo;

//
// <section className='restaurant-info-section'>
//   <ul className='restaurant-info-list'>
//     <li>
//       <ul className='rest-details-list-1'>
//         <li>
//           <h3>Dining Style</h3>
//           {restaurant.dining_style}
//         </li>
//         <li>
//           <h3>Hours Of Operation</h3>
//           {restaurant.hours_of_operation_string}
//         </li>
//         <li>
//           <h3>Phone Number</h3>
//           {restaurant.phone}
//         </li>
//         <li>
//           <h3>Website</h3>
//           {restaurant.website_url}
//         </li>
//         <li>
//           <h3>Dress Code</h3>
//           {restaurant.dress_code}
//         </li>
//       </ul>
//     </li>
//
//     <li>
//       <ul className='rest-details-list-2'>
//         <li>
//           <h3>Location</h3>
//           {restaurant.physical_address}
//         </li>
//       </ul>
//     </li>
//   </ul>
// </section>
