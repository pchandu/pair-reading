import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the dashboard
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated === true) {
      this.props.history.push("/dashboard");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user)
    .then(() => this.props.history.push("/dashboard"))
    
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul className="login-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-div d-flex justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col">
            <div className="login-input">
              <input
                className="form-control"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </div>
            <br />
            <div className="login-input">
              <input
                className="form-control"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </div>
            <br />
            <div className="text-center">
                <input type="submit" className="login-submit-btn  d-flex justify-content-center" value="Submit" />
                {this.renderErrors()}

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
