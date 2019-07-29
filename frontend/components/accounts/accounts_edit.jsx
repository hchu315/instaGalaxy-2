import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Footer from "../footer/footer";
import EditProfile from "./edit_profile";
import EditPassword from "./edit_password";

class AccountsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true 
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
            <li className={this.state.selected ? "edit-profile-selector-selected" : "edit-profile-selector"} onClick={() => this.setState({selected: true})}>
              Edit Profile
            </li>
                <li className={this.state.selected ? "edit-profile-selector" : "edit-profile-selector-selected"} onClick={() => this.setState({selected: false})}> 
              Change Password
            </li>
                <li className="edit-profile-selector" onClick={() => { this.props.logout() }}> 
              Log Out
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
            { this.state.selected ? 
            <EditProfile 
              currentUser={this.props.currentUser}
            /> :
            <EditPassword
            />
            }
        </article>
        </section>
      <Footer></Footer>
      </main>
    </div>
    )
  }
}

export default AccountsEdit;