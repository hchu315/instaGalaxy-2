class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    # @comment = Comment.find(params[:id])
    @comment.user_id = current_user.id
    if @comment.save
      render "api/comments/show"
    end
  end

  def edit
    @comment = Comment.find(params[:id])
    @comment.update_attributes(comment_params)

  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end
end
