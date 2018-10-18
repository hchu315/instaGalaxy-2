import React from 'react';
import { Link } from 'react-router-dom';

export default(props) => {
  let footerClass = props.currentUser ? "footer-container logged-in" : "footer-container"

    return(
      <footer className={footerClass}>
    <div className="footer-inner-container">
      <div className="nav-logo-container">
        <nav className="footer-nav-bar">
          <ul className="footer-nav-itemlist">
            <li className="footer-nav-items"><a className="footer-nav-links" href="">About us</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Support</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Press</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">API</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Jobs</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Privacy</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Terms</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Directory</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Profiles</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Hashtags</a></li>
            <li className="footer-nav-items"><a className="footer-nav-links" href="">Language</a></li>
          </ul>
        </nav>
        <span className="copyright-logo">© 2018 Instagalaxy</span>
      </div>
    </div>
  </footer>
)};
