class Api::DiningStyleController < ApplicationController



  def show
    @dining_style = DiningStyle.find(params[:id]).restaurants

  end

end
