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

  componentDidMount() {
    this.props.fetchPosts();  
    this.props.fetchUser(this.props.match.params.userId)
  }

  renderPosts(){
    let { currentUser, posts } = this.props
    if (Object.keys(posts).length === 0) {
      return null;
    } else {
      return (
        <div className="personal-album-inner-container" >
          {posts.map(post => post.user_id == this.props.match.params.userId ?
          <img src={post.photoUrl} onClick={ () => this.props.openPost(post.photoUrl) } className="album-picture"/> : ''
          )}
        </div>
      )
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (e.currentTarget.innerText === "Follow") {
      e.currentTarget.innerText = "Following";
      e.currentTarget.className = "edit-profile-button-nf";
    } else {
      e.currentTarget.innerText = "Follow";
      e.currentTarget.className = "edit-profile-button-f";
    }
  }

  render() {
    if (!this.props.user) return null;
    const profileUser = parseInt(this.props.match.params.userId)
    const user = this.props.user
    return (
      <div className="user-page-container">
        <Modal currentUser={user} />
        <NavBarContainer />
        <div className="user-page">
          <div className="user-entire-feed">
            <header className="user-header-container">
              <div className="user-picture-container">
                <div className="user-picture">
                  <img className="picture-img" src={user.photoUrl} alt=""/>
                </div>
              </div>
              <section className="user-info-container">
                <div className="user-settings-bar">
                  <div className="user-page-username">{user.username}</div>
                  <Link className="edit-profile-button-container" to={"/accounts/edit"} >
                    <button 
                      className={this.props.currentUser.id === profileUser ? "edit-profile-button" : "edit-profile-button-f"} 
                      onClick={this.props.currentUser.id === profileUser ? '' : e => this.handleClick(e)}
                    > 
                    { this.props.currentUser.id === profileUser ? "Edit Profile" : "Follow" }
                    </button>
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
                  <span>{user.full_name}</span>
                  {/* <span>{user.bio}</span> */}
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
