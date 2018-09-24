import React from 'react';
import { withRouter } from 'react-router-dom';

const ReservationIndexItem = (props) => {

    return (
      <li className='reservation_index_item'>
        <div>
        <img className='reservation_index_item_thumbnail' src={window.staticImages.defaultRestaurant} />
        </div>
        <div>
          <h3>
            GUESTS
          </h3>
            {props.reservation.party_size}
        </div>
        <div>
          <h3>
            DATE
          </h3>
            placeholder: we need to reformat DATE for this component.
        </div>
        <div>
          <h3>
            TIME
          </h3>
            placeholder: we need to reformat TIME for this component.
        </div>
        <div>
          <h3>
            RESTAURANT
          </h3>
            <div className='reservation_index_item_rest_link' onClick={()=>{props.history.push(`/restaurants/${props.reservation.restaurant_id}`)}}>
            {props.reservation.restaurant_name}
            </div>
        </div>
      </li>
    );
  }

export default withRouter(ReservationIndexItem);
