import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import NavBar from '../nav_bar/nav_bar';
import Footer from '../footer/footer';

class Feed extends React.Component {
  constructor(props){
    super(props);
    this.createLike = this.props.createLike;
    this.deleteLike = this.props.deleteLike;
    this.currentUser = this.props.currentUser;
    this.createComment = this.props.createComment;
    this.fetchComments = this.props.fetchComments;
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  // handleLike(e){
  //   // console.log('i think it worked');
  //   // console.log(this.props)
  //   // console.log(e)
  //   // e.preventDefault();
  //   // console.log('it worked!');
  //   // console.log(this.props)
  //
  //   if (this.props.post.liked) {
  //     this.props.deleteLike(this.props.post.id);
  //   } else {
  //     this.props.createLike(this.props.post.id);
  //   }
  // }

  render() {
    const posts = this.props.posts.reverse().map(post =>
      <PostIndexItem key={post.id} post={post}  createLike={this.createLike} deleteLike={this.deleteLike}
      currentUser={this.currentUser}
      createComment={this.createComment}
      />
    );

    // console.log(posts)
    return (
      <section>
        <NavBar/>
          <div className="feed-container">
            <ul className="feed">
              {posts}
            </ul>
            <div className="side-nav-container">
              <div className="side-user-nav">
                <div className="side-username-container">
                  <Link className="side-username" to={'/greeting'}>
                    {this.props.currentUser.username}
                  </Link>
                </div>
                <div className="side-fullname">
                  {this.props.currentUser.full_name}
                </div>
              </div>
              <div className="stories-header">
                <span className="stories-text">Stories</span>
                <span className="watchall-text">In Progress!</span>
              </div>
              <div className="stories"></div>
              <div className="side-nav-footer">
              </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Feed;

// <Link to={'/greeting'}>Future homepage</Link>
