import React from 'react';
import { Link } from 'react-router-dom';
const Timestamp = require('react-timestamp');

const PostIndexItem = ({ post }) => (
  <section className="feed-scroll">
    <article className="post-item-container">
      <header className="post-header-container">
        <Link to={'/greeting'}>
          <div className="author-profile-picture" />
        </Link>
        <div className="author-username">
          {post.author}
        </div>
      </header>
      <div className="post-img-container">
        <img className="post-img" src={post.photoUrl}/>
      </div>
      <div className="post-footer-container">
        <section className="post-icons-bar">
          <span className="like-icon" onClick={this.handleLike.bind(this)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </span>
          <span className="comment-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </span>
          <span className="share-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          </span>
          <span className="favorite-icon-container">
            <button className="favorite-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </button>
          </span>
        </section>
        <section className="likes-count"></section>
        <div className="comments-container">
          <ul className="poster-comment-container">
            <span className="post-author">
              {post.author}</span>
            <div className='user-caption-wrapper'>
            <li className="user-caption">
              {post.post_caption}
            </li>
          </div>
          </ul>
        </div>
        <div className="time-of-post">
          <Timestamp time={post.created_at} actualSeconds format='date' />
        </div>
        <section className="comment-box"></section>
      </div>
      <div className="misc-post-functions"></div>
    </article>

  </section>
)

export default PostIndexItem;
