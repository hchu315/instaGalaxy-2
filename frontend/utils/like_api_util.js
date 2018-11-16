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
