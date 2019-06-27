import React from 'react';

class EditPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
              <form className="accounts-edit-form">
                <div className="edit-profile-items">
                  <aside className="edit-profile-item-container">
                    <label className="edit-profile-item-labels">
                      Old Password
                </label>
                  </aside>
                  <div>
                    <input type="password"></input>
                  </div>
                </div>
                <div className="edit-profile-items">
                  <aside className="edit-profile-item-container">
                    <span className="edit-profile-item-labels">
                      New Password
                </span>
                  </aside>
                  <div>
                    <input type="text"></input>
                  </div>
                </div>
                <div className="edit-profile-items">
                  <aside className="edit-profile-item-container">
                    <span className="edit-profile-item-labels">
                      Confirm New Password
                </span>
                  </aside>
                  <div>
                    <input type="text"></input>
                  </div>
                </div>
                <div className="edit-submit-button-container">
                  <button className="edit-submit-button" type="button">Submit</button>
                </div>
              </form>
    )
  }
}

export default EditPassword;