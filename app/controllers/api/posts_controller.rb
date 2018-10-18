class Api::PostsController < ApplicationController
  def index
    @posts = Post.all.includes(:user)
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      render json: {message: "The droid has received your information!"}
    else
      render json: post.errors.full_messages
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :post_caption, :image)
  end

end
