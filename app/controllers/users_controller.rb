class UsersController < ApplicationController

  before_action :ensure_current_user
  # before_action :require_admin, only: [:destroy]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = 'User was successfully created.'
      redirect_to users_path(@user)
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:notice] = 'User was successfully updated.'
      redirect_to users_path
    else
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:id])
    if  @user.destroy
      redirect_to users_path, notice: "User was successfully deleted."
    else
      render :edit
    end
  end


    private

    def require_admin
      unless current_user == @user || current_user.admin == true
        render file: "#{Rails.root}/public/404.html", layout: false
      end
    end


     def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :trackertoken)
    end

end
