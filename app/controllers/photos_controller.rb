class PhotosController < ApplicationController
  def show
    # debugger
    @photo = Photo.find(params[:id])
    render :show
  end
end
