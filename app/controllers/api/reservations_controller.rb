class Api::ReservationsController < ApplicationController
  before_action :require_logged_in

  def create
    res_time = params_to_datetime_object(
      params[:reservation][:date],
      params[:reservation][:time]
    )
    res_params = {
        party_size: params[:reservation][:party_size],
        user_id: current_user.id,
        restaurant_id: params[:reservation][:restaurant_id],
        duration: 30,
        date_and_time: res_time
    }

    @reservation = Reservation.new(res_params)
    if @reservation.save
      render 'api/reservations/show'
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def delete
  end

  def show
    @reservation = Reservation.find(params[:id])
    render 'api/reservations/show'
  end

  def index
    @reservations = Reservation.find_by(user_id: current_user.id)
    render 'api/reservations/index'
  end

  private
  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :user_id, :party_size, :date, :time)
  end

  def params_to_datetime_object(date_string, time_string)

    datetime_string = date_string + "T" + time_to_military(time_string)
    DateTime.iso8601(datetime_string)
  end

  def time_to_military(time)

    t = time.split("")
    ampm = t.pop(2)
    t2 = t.join("").split(":")
    h = t2[0].to_i
    m = t2[1]

    h = h + 12 if ampm == "PM" && h != 12

    h = h.to_s
    h = "0" + h if h.length == 1

    h + ":" + m
  end

end
