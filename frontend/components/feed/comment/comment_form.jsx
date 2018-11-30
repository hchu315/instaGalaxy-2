import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: ''
    }
    // debugger;
    this.createComment = this.props.createComment;
    // console.log(this.props)
    this.postId = this.props.postId;
    this.handleKey = this.handleKey.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchComments();
  // }

  handleKey(e){
    const commentBody = this.state.commentBody;
    // this.setState({ commentBody: e.target.value});
    if (e.keyCode === 13) {
      e.preventDefault();
      // console.log(this.state.commentBody)
      const comment = {
        body: commentBody,
        post_id: this.props.postId
      }
      // console.log(this.postId);
      // console.log(comment);
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
