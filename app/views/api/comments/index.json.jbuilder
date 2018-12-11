# comments idx
# debugger
@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :updated_at
    # debugger
    json.username comment.user.username
  end
end
