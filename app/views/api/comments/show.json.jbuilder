# comments jB
json.set! @comment.id do
  json.extract! @comment, :user_id, :post_id, :body
end
