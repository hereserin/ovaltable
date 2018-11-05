class Api::SessionsController < ApplicationController
  # before_action :require_logged_out


  def create
    @user = User.includes(:reservations).find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login_user(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if logged_in?
      logout_user
      render json: {}
    else
      render json: ['No one is signed in'], status: 404
    end

  end


end
