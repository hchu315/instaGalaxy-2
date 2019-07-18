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
                <li className="footer-nav-items"><a className="footer-nav-links" href="https://hchu315.github.io/Portfolio/">About me</a></li>
                <li className="footer-nav-items"><a className="footer-nav-links" href="https://www.linkedin.com/in/henry-chu-65578a13a/">LinkedIn</a></li>
                <li className="footer-nav-items"><a className="footer-nav-links" href="https://github.com/hchu315">Github</a></li>
                <li className="footer-nav-items"><a className="footer-nav-links" href="https://angel.co/henry-chu-6?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar">AngelList</a></li>
          </ul>
        </nav>
        <span className="copyright-logo">© 2019 Instagalaxy</span>
      </div>
    </div>
  </footer>
)};

{/* <li className="footer-nav-items"><a className="footer-nav-links" href="">API</a></li>
  <li className="footer-nav-items"><a className="footer-nav-links" href="">Jobs</a></li>
  <li className="footer-nav-items"><a className="footer-nav-links" href="">Privacy</a></li>
  <li className="footer-nav-items"><a className="footer-nav-links" href="">Terms</a></li>
  <li className="footer-nav-items"><a className="footer-nav-links" href="">Directory</a></li>
  <li className="footer-nav-items"><a className="footer-nav-links" href="">Profiles</a></li>
  <li className="footer-nav-items"><a className="footer-nav-links" href="">Hashtags</a></li>
  <li className="footer-nav-items"><a className="footer-nav-links" href="">Language</a></li> */}
