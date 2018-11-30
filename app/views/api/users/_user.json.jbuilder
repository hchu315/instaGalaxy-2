json.user do
  json.extract! user, :id, :username, :full_name, :email
  json.photoUrl url_for(user.image)
  json.posts user.posts.map { |post| post.id }
end

json.posts do
  user.posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :user_id, :post_caption
      json.photoUrl url_for(post.image)
    end
  end
end
