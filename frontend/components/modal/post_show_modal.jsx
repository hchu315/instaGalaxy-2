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
    }
    this.handleBookmark = this.handleBookmark.bind(this);
  }

  handleBookmark() {
    const isSelected = this.state.isSelected;
    this.setState({ isSelected: !isSelected });
  }

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
                <span className="post-author">
                  {this.props.post.author}
                </span>
              {this.props.post.post_caption}
              <CommentIndexContainer 
                postId={this.props.post.id}
                />
            </div>
            <div className="post-show-actions">
              <PostShowActionBar 
                liked={ this.props.post.liked }
                createLike={ this.props.createLike }
                deleteLike={ this.props.deleteLike }
                postId={ this.props.post.id }
              />
            </div>
            <section className="likes-count-container">
              <div className="likes-count"> {this.props.post.likesCount} {this.props.post.likesCount > 1 ? 'likes' : 'like'}</div>
            </section>
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

{/* <Link to={`/users/${this.props.post.user_id}`}> */ }

{/* <Link className="users-link" to={`/users/${this.props.userId}`}> */ }
{/* </Link> */ }

