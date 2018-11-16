class Api::SearchController < ApplicationController

  def index

    puts "#{params[:query]}"
    if params[:query].empty?
      @restaurants = Restaurant.includes(:photos).all
    else
      @restaurants = [Restaurant.includes(:photos).first]
    end

    render 'api/restaurants/index'
  end

  private
  def search_params
    params.require(:restaurant).permit(:query)
  end


end
