import React from 'react';

class PostShowActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  handleLike() {
    if (this.props.liked) {
      this.props.deleteLike(this.props.postId);
    } else {
      this.props.createLike(this.props.postId);
    }
  }

  handleBookmark() {
    const isSelected = this.state.isSelected;
    this.setState({ isSelected: !isSelected });
  }

  render() {
    return (
      <section className="post-icons-bar">
      <span className="like-icon" >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className={this.props.liked ? "feather-heart" : "feather"} onClick={this.handleLike.bind(this)} ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </span>
      <span className="comment-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </span>
      <span className="share-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
      </span>
      <span className="favorite-icon-container">
        <a>
          <div className={ this.state.isSelected ? "favorite-icon-selected" : "favorite-icon" } onClick={this.handleBookmark.bind(this)} />
        </a>
      </span>
    </section>
    );
  }
};

export default PostShowActionBar;