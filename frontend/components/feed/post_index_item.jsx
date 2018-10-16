import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => (
  <li>
    {post.id}
    {post.post_caption}
  </li>
)

export default PostIndexItem;
