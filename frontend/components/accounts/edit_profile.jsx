import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="accounts-edit-form">
        <div className="edit-profile-items">
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
        </div>
      </form>
    )
  }
}

export default EditProfile;