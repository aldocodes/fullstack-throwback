import React from "react";
import $ from "jquery";
import axios from "axios";
import Post from "./Post.jsx";

// import dummy_data.json from "../data/dummy_data.json";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
      array: []
    };

    this.retrieveAllPosts = this.retrieveAllPosts.bind(this);
  }

  componentDidMount() {
    this.retrieveAllPosts();
  }

  retrieveAllPosts() {
    //if you don't specify, this automatically becomes get request;
    this.setState({
      status: "loading"
    });
    axios
      .get("/api/posts")
      .then(response => {
        console.log("response--", response);
        this.setState({
          status: "not loading",
          array: response.data
        });
        // console.log('response.data--', response.data)
        console.log("this.state.array", this.state.array);
        // console.log('viewPost--', this.props.viewPost())
      })
      .catch(function(error) {
        console.log("error", error);
      });
  }

  showLoading() {
    if (this.state.status === "loading") {
      return "Loading";
    }
  }

  render() {
    return (
      <div>
        {this.showLoading()}
        <h2>All Llamantations</h2>
        <ul>
          {this.state.array.map((el, i) => (
            <div key={i} onClick={() => this.props.viewPost(el._id)}>
              <li className="post-list-entry">
                <div className="post-list-entry-title">
                  {el.title}
                </div>
                <span className="post-list-entry-stats">Votes: {el.votes}</span>{" "}
                <span className="post-list-entry-stats">Comments: {el.comments.length}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
