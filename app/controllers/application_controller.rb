class ApplicationController < ActionController::Base

  def current_user
  if session[:user_id].present?
    User.find_by(id: session[:user_id])
  end
end

helper_method :current_user


def ensure_current_user
  unless current_user
    flash[:error] = 'You must sign in'
    store_location
    redirect_to sign_in_path
  end
end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
