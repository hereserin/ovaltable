class Api::SearchController < ApplicationController

  def index

    puts "#{params[:query]}"
    if params[:query].empty?
      @restaurants = Restaurant.includes(:photos).all
    else
      # @restaurants = [Restaurant.includes(:photos).first]
      @restaurants = Restaurant.search(query_to_array(params[:query]))
    end

    render 'api/restaurants/index'
  end

  private
  def search_params
    params.require(:restaurant).permit(:query)
  end

  def query_to_array(query_str)
    query_str.split("+")
  end


end
