import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: this.props.currentUser.full_name,
      username: this.props.currentUser.username,
      bio: this.props.currentUser.bio
    }
  }

  handleUpdate(field){
    return e => this.setState({ 
      [field] : e.currentTarget.value})
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
            <input value={this.state.fullName} onChange={this.handleUpdate("fullName").bind(this)} type="text"></input>
          </div>
        </div >
        <div className="edit-profile-items">
          <aside className="edit-profile-item-container">
            <span className="edit-profile-item-labels">
              Username
                </span>
          </aside>
          <div>
            <input value={this.state.username} onChange={this.handleUpdate("username").bind(this)} type="text"></input>
          </div>
        </div>
        <div className="edit-profile-items">
          <aside className="edit-profile-item-container">
            <span className="edit-profile-item-labels">
              Bio
                </span>
          </aside>
          <div>
            <input value={this.state.bio} onChange={this.handleUpdate("bio").bind(this)} type="text"></input>
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