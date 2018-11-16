class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    # debugger
    @like.user_id = current_user.id
    if @like.save
      @post = @like.post
      render "api/posts/show"
    end
  end

  def destroy
    @like = Like.find_by(post_id: params[:id], user_id: current_user.id)
    # debugger
    # Like.post.find(params:id)
    # @like = current_user.likes.where(post_id: params[:post_id].to_i)
    # debugger
    # @post = current_user.posts.find_by(post)
    if @like
      @like.destroy
    # @post = @like.post
      render "api/posts/show"
    end
  end

  private

  def like_params
    params.require(:like).permit(:post_id)
  end
end
