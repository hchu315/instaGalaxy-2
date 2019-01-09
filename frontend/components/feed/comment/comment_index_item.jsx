import React from 'react';

const CommentIndexItem = ({ postId, comment, currentUser }) => {
  // console.log(comment)
  return (
    <div className="post-comment">
      <span className="comment-author">
        { (postId === comment.post_id) ? comment.username ? comment.username : currentUser.username : '' }
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
