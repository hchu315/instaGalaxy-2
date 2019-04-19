import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Footer from "../footer/footer";


class AccountsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="accounts-edit-page">
      <NavBarContainer></NavBarContainer>
      <main className="accounts-edit-container">
        <section className="accounts-edit">
        <nav className="accounts-edit-options">
          <ul className="edit-profile-selector-container">
              <li className="edit-profile-selector">
              Edit Profile
            </li>
          </ul>
        </nav>
        <article className="accounts-edit-form-container">
          <div className="edit-profile-user">
            <figure>
              <img src={ this.props.currentUser.photoUrl } className="edit-profile-picture" />
            </figure>
            <h4>
              { this.props.currentUser.username }
            </h4>
          
          </div>
          <form className="accounts-edit-form">
            <div className="edit-profile-items">
              <aside className="edit-profile-item-container">
                <label className="edit-profile-item-labels">
                  Name
                </label>
              </aside>
              <div>
                <input value={ this.props.currentUser.full_name } onChange=""></input>
              </div>
            </div>
            <div className="edit-profile-items">
              <aside className="edit-profile-item-container">
                <span className="edit-profile-item-labels">
                  Username
                </span>
              </aside>
                <div>
                <input value={ this.props.currentUser.username }></input>
              </div>
            </div>
            <div className="edit-submit-button-container">
              <button className="edit-submit-button" type="button">Submit</button>
            </div>
          </form>
        </article>
        </section>
      <Footer></Footer>
      </main>
    </div>
    )
  }
}

export default AccountsEdit;