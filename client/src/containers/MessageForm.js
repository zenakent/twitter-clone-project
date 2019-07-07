import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleNewMessage(evt) {
    evt.preventDefault();
    this.props.postNewMessage(this.state.message);
  }

  render() {
    return (
      <form onSubmit={this.handleNewMessage}>
        {this.props.errors.message && (
          <div className="alert alert-danger">{this.props.errors.message}</div>
        )}
        <input
          type="text"
          name="message"
          className="form-control"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-success pull-right">
          Add my message
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { postNewMessage }
)(MessageForm);
