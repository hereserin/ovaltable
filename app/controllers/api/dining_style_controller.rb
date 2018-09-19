class Api::DiningStyleController < ApplicationController



  def show
    @dining_style = DiningStyle.find(params[:id]).restaurants

  end

  private
  def dining_style_params
    params.require(:dining_style).
  end
  
end
