class Api::PhotosController < ApplicationController
  before_action :require_logged_in

  def create

    photo_params = {
        user_id: current_user.id,
        restaurant_id: params[:photo][:restaurant_id],
        caption: params[:photo][:caption],
    }

    @photo = Photo.new(photo_params)
    @photo.pic.attach(params[:photo][:pic])

    if @photo.save
      render json: {message: "Your photo is posted!"}
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    debugger 
    @photo = Photo.find(params[:photo][:id])
  end

  def delete
  end

  private
  def photo_params
    params.require(:photo).permit(:restaurant_id, :pic, :photo_url, :caption)
  end

end
