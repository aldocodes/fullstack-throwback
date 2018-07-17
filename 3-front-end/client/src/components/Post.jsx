import React from "react";
import axios from 'axios';
import $ from "jquery";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: this.props.postId,
      post: {}
    };
  }

  componentDidMount() {
    console.log('postId--', this.state.postId)
    this.retrievePost();
    console.log('retrievePost');
  }

  retrievePost(){
    axios
      .get(`api/posts/${this.state.postId}`)
      .then(response => {
        this.setState({
          post: response.data
        })
        console.log('this.state.post', this.state.post)
      }).catch(function(error){
        console.log("error", error);
      });
  }

  upVotes(){
    axios({
      method: 'post',
      url: `api/posts/${this.state.postId}/votes`,
      params: {
        id: this.state.postId
      }
    }).then(votes => {
      this.retrievePost();
      console.log('this.state.votes', votes);
    })
  }

  commentTrack(e){
    this.setState({
      comment: e.target.value
    })
    console.log('commentTrack--', this.state.comment)
  }

  postComment(e){
    e.preventDefault();
    axios({
      method: 'post',
      url: `/api/posts/${this.state.postId}/comments`,
      data: {
        comment: this.state.comment
      },
      params: {
        id: this.state.postId
      }
    }).then(comments => {
      this.retrievePost();
      console.log('this.state.post', this.state.post)
      console.log('created a comment', comments)
      console.log('this.state.comment--', this.state.comments)
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.post.title}</h3>
        <p>
            {this.state.post.body}{" "}
        </p>
        <hr />
        <span onClick={(e) => this.upVotes(e)} className="post-stats">Votes {this.state.post.votes}</span>
        <span className="post-stats post-stats-comments">Comments {this.state.post.comments ? this.state.post.comments.length : 0}</span>
        <form>
          <textarea
            onKeyUp={(e) => this.commentTrack(e)}
            className="comment-input"
            placeholder="Add your comment here!"
          />
          <button onClick={(e)=>this.postComment(e)} className="comment-submit" type="submit">
            Save comment
          </button>
        </form>
        <ul>
          {this.state.post.comments ? this.state.post.comments.map((comment)=>(
            <li className="comment-entry">{comment}</li>
          )): ""}
        </ul>
      </div>
    );
  }
}
export default Post;
