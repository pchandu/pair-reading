import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/dashboard");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul className="signup-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-div d-flex justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <br />
            <div className="">
              <input
                className="form-control signup-input"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </div>
            <br />
            <input
              className="form-control signup-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <br />
            <input
              className="form-control signup-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input
              className="form-control signup-input"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />
            <div className="text-center">
              <input
                type="submit"
                className="signup-submit-btn d-flex justify-content-center"
                value="Submit"
              />
              {this.renderErrors()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
