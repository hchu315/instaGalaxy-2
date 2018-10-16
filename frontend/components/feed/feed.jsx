import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class Feed extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post =>
      <PostIndexItem key={post.id} post={post} />
    );

    return (
      <section>
        <Link to={'/greeting'}>Future homepage</Link>
        <ul>
          {posts}
        </ul>
      </section>
    )
  }
}

export default Feed;
