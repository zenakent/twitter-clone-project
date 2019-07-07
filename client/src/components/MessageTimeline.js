import React, { Component } from "react";
import MessageList from "../containers/MessageList";
import UserAside from "../components/UserAside";

class MessageTimeline extends Component {
  render() {
    return (
      <div className="row">
        <UserAside
          profileImageUrl={this.props.profileImageUrl}
          username={this.props.username}
        />
        <MessageList />
      </div>
    );
  }
}

export default MessageTimeline;
