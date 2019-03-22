import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Footer from "../footer/footer";


export const AccountsEdit = (props) => {
  console.log(props.currentUser.photoUrl)
  return (
    <div>
      <NavBarContainer></NavBarContainer>
      <main className="accounts-edit-container">
        <section className="accounts-edit">
        <nav className="accounts-edit-options">
          <ul>
              <li className="edit-profile-selector">
              Edit Profile
            </li>
          </ul>
        </nav>
        <article className="accounts-edit-form-container">
          <div className="edit-profile-user">
            <figure>
              <img src={ props.currentUser.photoUrl } className="edit-profile-picture" />
            </figure>
            <h4>
              { props.currentUser.username }
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
                <input value={ props.currentUser.full_name } onChange=""></input>
              </div>
            </div>
            <div className="edit-profile-items">
              <aside className="edit-profile-item-container">
                <span className="edit-profile-item-labels">
                  Username
                </span>
              </aside>
                <div>
                <input value={ props.currentUser.username }></input>
              </div>
            </div>
            <div className="edit-submit-button-container">
              <button className="edit-submit-button" type="button">Submit</button>
            </div>
          </form>
        </article>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}