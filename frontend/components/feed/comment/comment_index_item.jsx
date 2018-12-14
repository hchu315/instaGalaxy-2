import React from 'react';

const CommentIndexItem = ({ postId, comment }) => {
  // console.log(comment)
  return (
    <div className="post-comment">
      <span className="comment-author">
        { (postId === comment.post_id) ? comment.username : '' }
      </span>
      <span className="comment-body">
        { (postId === comment.post_id) ?
          comment.body : ''
        }
      </span>
    </div>
  );
};

export default CommentIndexItem;
