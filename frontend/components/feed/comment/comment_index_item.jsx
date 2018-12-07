import React from 'react';

class CommentIndexItem extends React.Component {
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
        return comment;
      }
    })

    // console.log(comments)

    return (
    <div>
      <div>
        <div>
          <h3>

          </h3>
          <span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  )};
}

export default CommentIndexItem;
