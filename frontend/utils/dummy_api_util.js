// export const fetchComments = () => {
//   $.ajax ({
//     method: 'GET',
//     url: 'api/comments'
//   })
// };

// export const createComment = (comment) => {
//   $.ajax ({
//     method: 'POST',
//     url: 'api/comments',
//     data: { comment }
//   })
// } 
export const fetchComments = () => ({
  $.ajax({
    method: 'GET',
    url: 'api/likes'
  })
};

export const createComment = (comment) => {
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  })
}