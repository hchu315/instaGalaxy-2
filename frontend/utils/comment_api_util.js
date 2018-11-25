export const createComment = (comment) => (
  $.ajax ({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  })
);

export const fetchComments = () => (
  $.ajax ({
    method: 'GET',
    url: 'api/comments'
  })
);
// export const deleteComment = (postId) => (
//   $.ajax ({
//     method: 'DELETE',
//     url: `api/comments/${postId}`
//   })
// );
