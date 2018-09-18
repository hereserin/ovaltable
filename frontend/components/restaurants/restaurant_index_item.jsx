import React from 'react';
import { withRouter } from 'react-router-dom';

// class RestaurantIndexItem extends React.Component {
// // does this need to be a class component?
// // changed this to class component, but only to include withRouter, do i need to?
//   constructor(props) {
//     super(props);
//     // debugger
//   }
//
//   render() {
  // debugger

const RestaurantIndexItem = (props) => {
  // debugger
    return (
      <li className='restaurant_index_item'>
        <img className='restaurant_index_item_thumbnail' src={window.staticImages.defaultRestaurant} />
        <div>
          <h3 onClick={()=>{props.history.push(`/restaurants/${props.restaurant.id}`)}}>
            {props.restaurant.restaurant_name}
          </h3>
            {props.restaurant.restaurant_description}
        </div>
      </li>
    );
  }

// }

// trying to include image:
      // <img src={defaultThumbnail} />

export default withRouter(RestaurantIndexItem);
