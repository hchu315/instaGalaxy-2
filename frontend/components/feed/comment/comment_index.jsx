import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchComments = this.props.fetchComments;
  }

  componentDidMount(){
    this.fetchComments();
  }

  render(){
    let comments = this.props.comments.map(comment => {
      if (this.props.postId === comment.post_id){
        return <CommentIndexItem
            comment={comment}
            postId={this.props.postId}
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
