class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])  
    render "api/users/show"
  end

  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
      # FIX THIS??
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :full_name, :bio, :image)
  end

end