import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => (
  <section className="feed-scroll">
    <article className="post-item-container">
      <div className="post-img-container">
        <img className="post-img" src={post.photoUrl}/>
        <br/>
        {post.post_caption}
      </div>
    </article>
  </section>
)

export default PostIndexItem;
