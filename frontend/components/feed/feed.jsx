import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import NavBar from '../nav_bar/nav_bar';

class Feed extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post =>
      <PostIndexItem key={post.id} post={post}  />
    );

    return (
      <section>
        <NavBar/>
        <ul className="feed">
          {posts}
        </ul>
      </section>
    )
  }
}

export default Feed;

// <Link to={'/greeting'}>Future homepage</Link>
