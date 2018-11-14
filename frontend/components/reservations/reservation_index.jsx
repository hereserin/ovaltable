import React from "react";
import ReservationIndexItem from "./reservation_index_item";
import { Route } from "react-router-dom";

class ReservationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: null
    };
  }

  componentDidMount() {
    this.props.fetchReservations().then(({ reservations }) => {
      this.setState({ reservations: reservations });
    });
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    const reservations = this.props.order.map((reservationId, idx) => {
      const reservation = this.props.reservations[reservationId];
      const restaurant = reservation.restaurant_id;
      // TODO: REFACTOR TO MAKE THIS DRY, Need to add Thumbnail as its own component
      const thumbId = this.props.restaurants[reservation.restaurant_id]
        .photos[0];
      let thumbnail = window.staticImages.defaultRestaurant;
      if (thumbId) {
        thumbnail = this.props.photos[thumbId].photoUrl;
      }
      return (
        <ReservationIndexItem
          key={idx}
          reservation={reservation}
          thumbnail={thumbnail}
          cancelReservation={() => this.props.cancelReservation(reservationId)}
          openModalPhotoForm={() =>
            this.props.openModalShowReservation(reservationId)
          }
          showReservation={() => this.props.showReservation(reservationId)}
        />
      );
    });
    const numOfReservations = reservations.length;

    return (
      <section>
        <h1>Your Reservations:</h1>
        <ul className="reservation-index-list">{reservations}</ul>
        <h1>{`You have ${numOfReservations} reservation(s)`}</h1>
      </section>
    );
  }
}

export default ReservationIndex;
