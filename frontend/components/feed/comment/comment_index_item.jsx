import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ postId, comment, currentUser }) => {
  return (
    <div className="post-comment">
      <Link className="users-link" to={`/users/${comment.user_id}`}>
        <span className="comment-author">
          { (postId === comment.post_id) ? comment.username ? comment.username : currentUser.username : '' }
        </span>
      </Link>
      <span className="comment-body">
        { (postId === comment.post_id) ?
          comment.body : ''
        }
      </span>
    </div>
  );
};

export default CommentIndexItem;
