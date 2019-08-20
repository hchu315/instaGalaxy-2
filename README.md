# README

[InstaGalaxy Live](https://insta-galaxy.herokuapp.com/#/)

# InstaGalaxy

Welcome to InstaGalaxy, an instagram-inspired clone web application. InstaGalaxy is a social-media platform that allows you to share your favorite photos with your friends and family, and interact through commenting and liking photos. Post your favorite photo or look at photos posted by other users!

This project was built over a period of 10 days, and there will be more changes and features added in the future.

![homepage](https://github.com/hchu315/instaGalaxy/blob/master/app/assets/images/github_readme_img.png)

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

```jsx
handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_caption]', this.state.postCaption);
    formData.append('post[image]', this.state.imageFile);

    $.ajax({
      method: "post",
      url: "api/posts",
      data: formData,
      contentType: false,
      processData: false
    }).then(response => console.log(response.message),
    response => console.log(response.responseJSON)
  ).then(() => alert("Success!"));

    this.state.postCaption = '';
    this.state.imageFile = null
  }
```

3) User Follows - Allows an user to follow their friends and family, or favorite users.

```jsx
 handleFollow(e) {
    e.preventDefault();
    if (e.currentTarget.innerText === "Follow") {
      e.currentTarget.innerText = "Following";
      e.currentTarget.className = "edit-profile-button-nf";
    } else {
      e.currentTarget.innerText = "Follow";
      e.currentTarget.className = "edit-profile-button-f";
    }
  }
```

4) User Likes - Allows an user to like their favorite photo at the click of a button.

```ruby
export const createLike = (postId) => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {like: {post_id: postId} }
  })
);


export const deleteLike = (postId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${postId}`
  })
);
```

5) User Comments - Allows an user to leave comments on photos.

```ruby
const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, oldState, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, action.comment);
    default:
      return oldState;
  }
};
```

![feed-page](https://github.com/hchu315/instaGalaxy/blob/master/app/assets/images/github_user_splashpage.png)
