  @users.each do |user|
    json.set! user.id do
      json.extract! user, :username
      json.photoUrl url_for(user.image) if user.image.attached?
    end
  end