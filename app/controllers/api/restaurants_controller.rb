class Api::RestaurantsController < ApplicationController

  def show
    # debugger
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
    # debugger
    puts "#{params[:search_user_input]}"
    if params[:search_user_input]
      @restaurants = [Restaurant.includes(:photos).first]
    else
      @restaurants = Restaurant.includes(:photos).all
    end

    render 'api/restaurants/index'
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:restaurant_name, :dining_style_id, :dress_code_id, :regional_key_id, :search_user_input)
  end


end
