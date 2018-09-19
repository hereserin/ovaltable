import React from 'react';

const RestaurantShowHoursOfOperation = ({restaurantHoursIds, hours}) => {
  // look up hours of operation for a given restaurant and render below



// i need to add a string to show a user friendly rendering of the time block
  let restaurantHours = restaurantHoursIds.map((hourId, idx) => {
      return (
        <li>
          {hours[hourId].day_of_week}
          {hours[hourId].time_block}
        </li>
      );
  });

  return (
    <div>
      The hours of operation...(place here)
      <ul>
        {restaurantHours}
      </ul>
    </div>
  );
};

export default RestaurantShowHoursOfOperation;
