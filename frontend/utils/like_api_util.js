export const createLike = () => (
  $.ajax({
    method: 'POST',
    url: 'api/likes'
  })
);

// pass postId as data to create?

export const deleteLike = (postId) => {
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${postId}`
  })
};
