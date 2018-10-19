import React from 'react';
import { Link } from 'react-router-dom'

export default() => {
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
              <div className="search-icon"/>
              <span className="search-text">Search</span>
            </div>
          </div>
          <div className="menu-icons-container">
            <div className="menu-icons">
              <Link to={"/upload"}><div className="upload-icon"/></Link>
              <Link to={""}><div className="activity-icon"/></Link>
              <Link to={"/greeting"}><div className="user-icon" /></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id='nav-space'></div>
  </div>
  );
};


// <div></div>
