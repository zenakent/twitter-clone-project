import React, { Component } from "react";
import errors from "../store/reducers/errors";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: "", profileImageUrl: "" };

    this.handeChange = this.handeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handeChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const {
      heading,
      buttonText,
      signUp,
      errors,
      history,
      removeError
    } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errors.message && (
                <div className="alert alert-danger">{errors.message}</div>
              )}
              <label htmlFor="email">Email: </label>
              <input
                className="form-control"
                id="email"
                name="email"
                onChange={this.handeChange}
                value={email}
                type="text"
              />
              <label htmlFor="password">Password: </label>
              <input
                className="form-control"
                id="password"
                name="password"
                onChange={this.handeChange}
                type="password"
              />
              {signUp && (
                <div>
                  <label htmlFor="username">Username: </label>
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handeChange}
                    value={username}
                    type="text"
                  />
                  <label htmlFor="image-url">Image URL: </label>
                  <input
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    onChange={this.handeChange}
                    type="text"
                    value={profileImageUrl}
                  />
                </div>
              )}
              <button
                className="btn btn-primary btn-block btn-lg"
                type="submit"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
