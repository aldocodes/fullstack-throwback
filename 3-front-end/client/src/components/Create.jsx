import React from "react";
import $ from "jquery";
import axios from 'axios';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    }
    this.inputTitle = this.inputTitle.bind(this);
    this.inputBody = this.inputBody.bind(this);
  }

  inputTitle(e) {
    this.setState({
      title: e.target.value
    })
    console.log('title', this.state.title)
  }

  inputBody(e) {
    this.setState({
      body: e.target.value
    })
    console.log('body', this.state.body)
  }

  createPost(e){
    e.preventDefault();
    axios
    .post('/api/posts', {
      title: this.state.title,
      body: this.state.body  
    })
    .then(response => {
      this.props.viewPost(response.data._id)
      // console.log('created a post--', response.data);
    })
  }   

  render() {
    return (
      <div>
        <h2>New Post</h2>
        <form>
          <input
            onKeyUp={this.inputTitle}
            className="create-title-input"
            type="text"
            placeholder="Post Title"
          /> 
          <textarea onKeyUp={this.inputBody}className="create-body-textarea" placeholder="Post Body" />
          <button onClick={(e)=>this.createPost(e)} className="create-submit-button" type="submit"> 
            Save post
          </button>
        </form>
      </div>
    );
  }
}

export default Create;
