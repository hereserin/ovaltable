import React from 'react';
import { withRouter } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {



render() {

  // if(this.props. == 0) return <div></div>;

  const thumbId = this.props.restaurant.photos[0];
  let thumbnail = window.staticImages.defaultRestaurant;

  if ( thumbId ) {
    thumbnail = this.props.photos[thumbId].photoUrl;
  }


    return (
      <li className='restaurant_index_item'>
        <img className='restaurant_index_item_thumbnail' src={thumbnail} />
        <div>
          <h3 onClick={()=>{this.props.history.push(`/restaurants/${this.props.restaurant.id}`)}}>
            {this.props.restaurant.restaurant_name}
          </h3>
            {this.props.restaurant.restaurant_description}
        </div>
      </li>
    );
  }

}



export default withRouter(RestaurantIndexItem);
