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
    // console.log(this.props)
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
          {/* <form className="accounts-edit-form"> */}
            { this.state.selected ? 
            <EditProfile 
              currentUser={this.props.currentUser}
            /> :
            <EditPassword
            />
            }
          {/* </form> */}
        </article>
        </section>
      <Footer></Footer>
      </main>
    </div>
    )
  }
}

export default AccountsEdit;

{/* <div className="edit-profile-items">
<aside className="edit-profile-item-container">
  <label className="edit-profile-item-labels">
    Name
                </label>
</aside>
  <div>
    <input value={this.props.currentUser.full_name} onChange=""></input>
  </div>
            </div >
  <div className="edit-profile-items">
    <aside className="edit-profile-item-container">
      <span className="edit-profile-item-labels">
        Username
                </span>
    </aside>
    <div>
      <input value={this.props.currentUser.username}></input>
    </div>
  </div>
  <div className="edit-profile-items">
    <aside className="edit-profile-item-container">
      <span className="edit-profile-item-labels">
        Bio
                </span>
    </aside>
    <div>
      <input value={this.props.currentUser.bio}></input>
    </div>
  </div>
  <div className="edit-submit-button-container">
    <button className="edit-submit-button" type="button">Submit</button>
  </div> */}