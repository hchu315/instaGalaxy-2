json.array! @posts do |post|
  json.extract! post, :id, :post_caption
  json.photoUrl url_for(post.photo)
end
