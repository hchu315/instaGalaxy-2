class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :json
      # FIX THIS
    else
      flash.now[:errors] = user.errors.full_messages
    end
  end

  def create
    @user = User.create()
    if @user.save
      login(@user)
      render :json
      # FIX THIS
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :full_name, :bio)
  end

end
