json.array! @posts do |post|
  json.extract! post, :id, :user_id, :post_caption, :created_at
  json.photoUrl url_for(post.image)
  json.author post.user.username
  # debugger;
  json.likesCount post.likes.count
  json.liked post.likes.exists?(user_id: current_user.id)
  # debugger
  # json.image url_for(post.user.image)
end

# json.user do
#   json.extract! post.user, :username, :email
# end

# url:
# '/api/taskers?task_category=${taskCategory}'
