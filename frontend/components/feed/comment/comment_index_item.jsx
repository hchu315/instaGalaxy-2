import React from 'react';

const CommentIndexItem = ({ postId, comment }) => {
  return (
    <div>
      { (postId === post.id) ?
        comment.body : ''
      }
    </div>
  );
};

export default CommentIndexItem;
