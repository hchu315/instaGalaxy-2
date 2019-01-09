import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';
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

  render() {
    console.log(this.currentUser)
    const posts = this.props.posts.map(post =>
      <PostIndexItem key={post.id} post={post}  createLike={this.createLike} deleteLike={this.deleteLike}
      currentUser={this.currentUser}
      createComment={this.createComment}
      />
    );

    return (
      <section>
        <NavBarContainer/>
          <div className="feed-container">
            <ul className="feed">
              {posts.reverse()}
            </ul>
        </div>
      </section>
    )
  }
}

export default Feed;

// <Link to={'/greeting'}>Future homepage</Link>

// <div className="side-nav-container">
//   <div className="side-user-nav">
//     <div className="side-username-container">
//       <Link className="side-username" to={'/greeting'}>
//         {this.props.currentUser.username}
//       </Link>
//     </div>
//     <div className="side-fullname">
//       {this.props.currentUser.full_name}
//     </div>
//   </div>
//   <div className="stories-header">
//     <span className="stories-text">Stories</span>
//     <span className="watchall-text">In Progress!</span>
//   </div>
//   <div className="stories"></div>
//   <div className="side-nav-footer">
//   </div>
// </div>
