class Api::SearchController < ApplicationController

  def index
    puts "#{params[:query]}"
    if params[:query]
      @restaurants = [Restaurant.includes(:photos).first]
    else
      @restaurants = [Restaurant.includes(:photos).first]
      # @restaurants = Restaurant.includes(:photos).all
    end

    render 'api/restaurants/index'
  end

  private
  def search_params
    params.require(:restaurant).permit(:query)
  end


end
