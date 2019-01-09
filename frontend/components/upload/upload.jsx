import React from 'react';
import { withRouter} from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Footer from '../footer/footer';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postCaption: "",
      imageFile: null,
    };
  }

  handleInput(e) {
    this.setState({postCaption: e.target.value});
  }

  handleFile(e) {
    this.setState({imageFile: e.target.files[0]});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_caption]', this.state.postCaption);
    formData.append('post[image]', this.state.imageFile);

    $.ajax({
      method: "post",
      url: "api/posts",
      data: formData,
      contentType: false,
      processData: false
    }).then(response => console.log(response.message),
    response => console.log(response.responseJSON)
  ).then(() => alert("Success!"));

    this.state.postCaption = '';
    this.state.imageFile = null
  }

  render() {
    return (
      <div className="upload-page-container">
        <NavBarContainer />
      <div className="upload">
        <div className="upload-form-container">
          <form className="upload-form" onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>
                Upload a new image:
              </label>
              <input className="upload-locally" type="file" onChange={this.handleFile.bind(this)} />
            </div>
            <br/>
            <label className="caption-input">Post Caption<br/>
              <textarea className="caption-input-text" type="text" onChange={this.handleInput.bind(this)} value={this.state.postCaption} />
            </label>
            <br/>
            <button>Dispatch a droid</button>
          </form>
          <Footer />
        </div>
      </div>
    </div>
    );
  }
}

export default Upload;
