import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Modal from '../modal/modal';
import Footer from '../footer/footer';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    let { currentUser, posts } = this.props
    if (Object.keys(posts).length === 0) {
      return null;
    } else {
      return (
        <div className="personal-album-inner-container" >
          {posts.map(post => post.user_id === currentUser.id ?
          <img src={post.photoUrl} onClick={ () => this.props.openPost(post.photoUrl) } className="album-picture"/> : ''
          )}
        </div>
      )
    }
  }
  // (<img src={post.photoUrl} onClick={ () => this.props.openPost(post.photoUrl) }/>)
  //
  // {currentUser.posts.map(postId =>
  //   <img src={posts[postId].photoUrl} onClick={ () => this.props.openPost(posts[postId].photoUrl) }/>
  // )}

  render() {
    // console.log(this.props.currentUser.username)
    return (
      <div className="user-page-container">
        <Modal currentUser={this.props.currentUser} />
        <NavBarContainer />
        <div className="user-page">
          <div className="user-entire-feed">
            <header className="user-header-container">
              <div className="user-picture-container">
                <div className="user-picture">
                  <img className="picture-img" src={this.props.currentUser.photoUrl} alt=""/>
                </div>
              </div>
              <section className="user-info-container">
                <div className="user-settings-bar">
                  <div className="user-page-username">{this.props.currentUser.username}</div>
                  <Link className="edit-profile-button-container" to={"/accounts/edit"}>
                    <button className="edit-profile-button">Edit Profile</button>
                  </Link>
                  <div className="account-settings-icon-container">
                    <div className="account-settings-icon">
                      <input className="account-settings-icon2" onClick={this.props.openModal.bind(this)} title="Logout"
                        src="https://cdn.dribbble.com/users/966/screenshots/2262572/bb-8.png" type="image"/>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="posts-follows-stats-container">
                  <li className="post-follows-stats"> <span className="numbers">66</span> posts</li>
                  <li className="post-follows-stats"> <span className="numbers">1977</span> followers</li>
                  <li> <span className="numbers">1138</span> following</li>
                </ul>
                <div className="fullname-bio-container">
                  <span>{this.props.currentUser.full_name}</span>
                  <span>{this.props.currentUser.bio}</span>
                </div>
              </section>
            </header>
            <div className="intermediate-bar">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="personal-album-container">
              {this.renderPosts()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )}
}

export default Greeting;
