import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  handleRemove(user_id, message_id) {
    console.log("hello");
    this.props.removeMessage(user_id, message_id);
  }

  render() {
    console.log(this.props);
    const { messages, removeMessage } = this.props;
    let messageList = messages.map(m => (
      <MessageItem
        test={m}
        key={m._id}
        date={m.createdAt}
        username={m.user.username}
        text={m.text}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        // removeMessage={this.handleRemove(m.user._id, m._id)}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="messages">
            {messageList.reverse()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages, removeMessage }
)(MessageList);
