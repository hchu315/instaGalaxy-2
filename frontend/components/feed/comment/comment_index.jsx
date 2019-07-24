import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchComments = this.props.fetchComments;
    this.currentUser = this.props.currentUser;
  }

  componentDidMount(){
    this.fetchComments();
  }

  render(){
    let comments = this.props.comments.map(comment => {
      if (this.props.postId === comment.post_id){
        return <CommentIndexItem
            key={comment.id}
            comment={comment}
            postId={this.props.postId}
            currentUser={this.currentUser}
          />;

      }
    }
  )

    return (
    <div>
      { comments }
    </div>
  )};
}

export default CommentIndex;
