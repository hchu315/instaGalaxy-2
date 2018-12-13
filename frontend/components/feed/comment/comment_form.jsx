import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: ''
    }
    this.createComment = this.props.createComment;
    this.postId = this.props.postId;
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e){
    const commentBody = this.state.commentBody;
    // this.setState({ commentBody: e.target.value});
    if (e.keyCode === 13) {
      e.preventDefault();
      const comment = {
        body: commentBody,
        post_id: this.props.postId
      }
      this.createComment(comment).then(() => this.setState({commentBody: ''})
      );
    }
  }

  render() {
    // const comments = this.props.comments.map(comment => )
    // debugger
    return (
      <section className="comment-box-container">
        <div className="comment-box">
          <form className="comment-form" >
            <textarea className="comments" value={ this.state.commentBody } placeholder="Add a comment..." onChange={ (e) => this.setState({ commentBody: e.currentTarget.value }) } onKeyDown={ this.handleKey }></textarea>
          </form>
        </div>
      </section>
  )}
}

export default Comment;
