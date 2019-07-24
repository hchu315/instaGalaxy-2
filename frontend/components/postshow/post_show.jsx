import React from 'react';
import PostShowModal from '../modal/post_show_modal';
import NavBarContainer from '../nav_bar/nav_bar_container';

export default ({ currentUser, photoUrl, fetchComments, post, createLike, deleteLike, fetchPost }) => {
  // console.log(currentUser)
  console.log(props)
  // console.log(state)
  // componentDidMount() {
  //   // fetchPost();
  // }

  return (
    <div>
    <NavBarContainer />
    <PostShowModal 
      currentUser={currentUser}
      photoUrl={photoUrl}
      fetchComments={fetchComments}
      post={post}
      // fetchPost={fetchPost}
      createLike={createLike}
      deleteLike={deleteLike}
      />
    </div>
  )
}