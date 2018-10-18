json.array! @posts do |post|
  json.extract! post, :id, :user_id, :post_caption
  json.photoUrl url_for(post.image)
  json.author post.user.username
  # json.image url_for(post.user.image)
end

# json.user do
#   json.extract! post.user, :username, :email
# end

# url:
# '/api/taskers?task_category=${taskCategory}'
