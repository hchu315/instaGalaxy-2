import React from 'react';
import CommentIndexContainer from '../feed/comment/comment_index_container';
import CommentContainer from '../feed/comment/comment_container';
import PostShowActionBar from '../postshow/post_show_actionbar';
import { Link } from 'react-router-dom';
const Timestamp = require('react-timestamp');


class PostShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      // liked: this.props.post.liked
    }
    // this.deleteLike = this.props.deleteLike;
    // this.createLike = this.props.createLike;
    this.handleLike = this.handleLike.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
  }

  handleLike() {
    // const liked = this.state.liked;
    // console.log(this.props.post.id)
    // console.log(this.props.liked)
    
    if (this.props.post.liked) {
      this.deleteLike(this.props.post.id);
    } else {
      this.createLike(this.props.post.id);
    }

    // this.setState(
    //   { liked: !liked }
    // )
  }

  handleBookmark() {
    const isSelected = this.state.isSelected;
    this.setState({ isSelected: !isSelected });
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.liked !== prevProps.liked){

  //   }
  //   // this.props.fetchPost(this.props.post.id)
  //   // console.log('test')
  // }

  render() {
    return (
    <div className="post-show-container">
        <div className="post-show">
          <img className="post-show-image" src={ this.props.post.photoUrl }></img>
        </div>
        <div className="post-show-sidebar"> 
          <header className="post-show-header">
            <img className="post-show-avatar" src={ this.props.photoUrl} />
            <span className="post-show-user">
              {this.props.currentUser}
            </span>
          </header>
          <section className="post-show-comment-container">
            <div className="post-show-comments">
              {/* <Link className="users-link" to={`/users/${this.props.userId}`}> */}
                <span className="post-author">
                  {this.props.post.author}
                </span>
              {/* </Link> */}
              {this.props.post.post_caption}
              <CommentIndexContainer 
                postId={this.props.post.id}
                />
            </div>
            <div className="post-show-actions">
              <PostShowActionBar 
                liked={ this.props.post.liked }
                createlike={ this.props.createLike.bind(this) }
                deletelike={ this.props.deleteLike.bind(this) }
              />
               {/* <section className="post-icons-bar">
                <span className="like-icon" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className={this.props.post.liked ? "feather-heart" : "feather"} onClick={this.handleLike} ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </span>
                <span className="comment-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </span>
                <span className="share-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </span>
                <span className="favorite-icon-container">
                   <button className="favorite-icon">
                  <a>
                    <div className={this.state.isSelected ? "favorite-icon-selected" : "favorite-icon"} onClick={this.handleBookmark} />
                  </a>
                  </button>
                </span>
              </section> */}
            </div>
            <div className="time-of-postshow">
              <Timestamp time={this.props.post.created_at} actualSeconds format='date' />
            </div>
            <div className="post-show-add-comment">
              <CommentContainer 
                postId={this.props.post.id}/>
            </div>
          </section>
        </div>
    </div>
    )
  };
}

export default PostShowModal;