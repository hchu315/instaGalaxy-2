@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :user_id, :post_caption, :created_at
    json.photoUrl url_for(post.image)
    json.author post.user.username
    json.likesCount post.likes.count
    json.liked post.likes.exists?(user_id: current_user.id)
  end
end

# json.array! @posts do |post|
#   json.extract! post, :id, :user_id, :post_caption, :created_at
#   json.photoUrl url_for(post.image)
#   json.author post.user.username
#   json.likesCount post.likes.count
#   json.liked post.likes.exists?(user_id: current_user.id)
#   # json.image url_for(post.user.image)
# end
