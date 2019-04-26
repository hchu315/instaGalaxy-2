# README

[InstaGalaxy Live](https://instagalaxy.herokuapp.com/#/)

# InstaGalaxy

Welcome to InstaGalaxy, an instagram-inspired clone web application. InstaGalaxy is a social-media platform that allows you to share your favorite photos with your friends and family, and interact through commenting and liking photos. Post your favorite photo or look at photos posted by other users!

This project was built over a period of 10 days, and there will be more changes and features added in the future.

![homepage](https://github.com/hchu315/instaGalaxy/blob/master/app/assets/images/instagalaxy%20homepage.png)


## Technologies

InstaGalaxy was built using Ruby on Rails for the backend, PostGreSQL serving as the database, and React.js/Redux for the frontend. Active Storage was used in conjunction with Amazon Web Services to store and retrieve images on the cloud.

## Features

1) User Authentication - Secure user authentication with BCrypt that allows an user to sign up, login, and logout.

```ruby
def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user: nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
 ```

2) User Uploads - Allows an user to upload images and add an optional caption to the image.
3) User Follows - Allows an user to follow their friends and family, or favorite users. (In progress)
4) User Likes - Allows an user to like their favorite photo at the click of a button.
5) User Comments - Allows an user to leave comments on photos. (In progress)

![feed-page](https://github.com/hchu315/instaGalaxy/blob/master/app/assets/images/Screen%20Shot%202018-11-18%20at%2010.54.03%20PM.png)
