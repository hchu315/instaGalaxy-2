@users.each do |user|
  json.set! user[1] do
    json.username user[0]
  end
end