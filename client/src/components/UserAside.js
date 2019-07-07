import React, { Component } from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

class UserAside extends Component {
  render() {
    return (
      <aside className="col-sm-2">
        <div className="panel panel-default">
          <div className="panel-body">
            <img
              src={this.props.profileImageUrl || DefaultProfileImg}
              alt={this.props.username}
              className="img-thumbnail"
            />
          </div>
        </div>
      </aside>
    );
  }
}

export default UserAside;
