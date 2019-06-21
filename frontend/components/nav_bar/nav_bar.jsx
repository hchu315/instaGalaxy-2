import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
    <nav className="nav-bar">
      <div className="inner-nav-bar">
        <div className="nav-items">
          <div className="feed-redirect">
            <Link to={'/feed'}>
              <div className="site-icon"/>
            </Link>
            <div className="redirect-border"/>
            <Link to={'/feed'}>
              <span className="site-name">INSTAGALAXY</span>
            </Link>
          </div>
          <div className="search-bar-container">
            <div className="search-bar">
              <span className="search-text">Welcome { props.currentUser.username }!</span>
            </div>
          </div>
          <div className="menu-icons-container">
            <div className="menu-icons">
              <Link to={"/upload"} className="navbar-icons">
                <div className="upload-icon" title="Upload"/>
                Upload
              </Link>
                <Link to={""} className="navbar-icons">
                <div className="activity-icon" title="Feed"/>
                Feed
              </Link>
                <Link to={"/greeting"} className="navbar-icons">
                <div className="user-icon" title="Profile"/>
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id='nav-space'></div>
  </div>
  );
};

export default NavBar;