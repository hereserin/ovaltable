class Api::Reservations_Controller < ApplicationController

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render 'api/reservation/show'
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def delete
  end

  def show
  end

  def index
  end

  private
  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :user_id, :party_size, :date, :time)
  end

end
