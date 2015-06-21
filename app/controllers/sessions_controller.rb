class SessionsController < ApplicationController

  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    flash[:alert] = 'Thank you for Signing In with Twitter'
    redirect_to root_url
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = 'Goodbye'
    redirect_to root_url
  end

end
