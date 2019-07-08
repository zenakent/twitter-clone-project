import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <li className="list-group-item">
          <img
            src={this.props.profileImageUrl || DefaultProfileImg}
            alt={this.props.username}
            height="100"
            width="100"
            className="timeline-image"
          />
          <div className="message-area">
            <Link to="/">@{this.props.username} &nbsp;</Link>
            <span className="text-muted">
              <Moment className="text-muted" format="DD MMM YYYY">
                {this.props.date}
              </Moment>
            </span>
            <p>{this.props.text}</p>
            {this.props.isCorrectUser && (
              <a className="btn btn-danger" onClick={this.props.removeMessage}>
                Delete
              </a>
            )}
          </div>
        </li>
      </div>
    );
  }
}

export default MessageItem;
