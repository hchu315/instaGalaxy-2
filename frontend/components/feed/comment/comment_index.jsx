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
      <CommentIndexItem comment={comment}
        postId={this.props.postId}
      />
      // if (this.props.postId === comment.post_id){
      // }
    })

    // console.log(comments)

    return (
    <div>
      <div>
        <div>
          <h3>

          </h3>
          <span>
            <span>{ comments }</span>
          </span>
        </div>
      </div>
    </div>
  )};
}

export default CommentIndex;
