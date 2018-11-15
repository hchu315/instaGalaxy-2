class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      @post = @like.post
      render "api/posts/show"
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    @post = @like.post
    render "api/posts/show"
  end

  private

  def like_params
    params.require(:like).permit(:post_id)
  end
end
