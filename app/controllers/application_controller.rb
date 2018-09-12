class ApplicationController < ActionController::Base

  helper_method :current_user
  helper_method :logged_in?

  private

  def login_user(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout_user
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token]
    )
  end

  def logged_in?
    !!current_user
  end

  def require_logged_out
    # how to redirect here? base?
    if logged_in?
      render json: ['user already logged in '], status: 200
    end
  end

  def require_logged_in
    # how to redirect here? base?
    unless logged_in?
      render json: ['must login for access'], status: 401
    end
  end


end
