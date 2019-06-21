import React from 'react';
// import NavBarContainer from '../nav_bar/nav_bar_container';
// import Footer from "../footer/footer";


class EditPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
    return (
            <article className="accounts-edit-form-container">
              <div className="edit-profile-user">
                <figure>
                  <img src={this.props.currentUser.photoUrl} className="edit-profile-picture" />
                </figure>
                <h4>
                  {this.props.currentUser.username}
                </h4>

              </div>
              <form className="accounts-edit-form">
                <div className="edit-profile-items">
                  <aside className="edit-profile-item-container">
                    <label className="edit-profile-item-labels">
                      Old Password
                </label>
                  </aside>
                  <div>
                    <input value="" onChange=""></input>
                  </div>
                </div>
                <div className="edit-profile-items">
                  <aside className="edit-profile-item-container">
                    <span className="edit-profile-item-labels">
                      New Password
                </span>
                  </aside>
                  <div>
                    <input value=""></input>
                  </div>
                </div>
                <div className="edit-profile-items">
                  <aside className="edit-profile-item-container">
                    <span className="edit-profile-item-labels">
                      Confirm New Password
                </span>
                  </aside>
                  <div>
                    <input value=""></input>
                  </div>
                </div>
                <div className="edit-submit-button-container">
                  <button className="edit-submit-button" type="button">Submit</button>
                </div>
              </form>
            </article>
    )
  }
}

export default EditPassword;