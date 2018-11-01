class Api::RestaurantsController < ApplicationController

  def show

    @restaurant = Restaurant.find(params[:id])
    # @reviews = @restaurant.reviews
    render 'api/restaurants/show'
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update(restaurant_params)
      render 'api/restaurants/show'
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def index
    @restaurants = Restaurant.all

    render 'api/restaurants/index'
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:restaurant_name, :dining_style_id, :dress_code_id, :regional_key_id)
  end


end
