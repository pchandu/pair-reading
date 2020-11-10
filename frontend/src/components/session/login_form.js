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
    
  }

  
  render() {
    const {errors} = this.state;
    return ( 
      <div className="login-div">
        <h1> Login to see your pairs </h1>
        <form onSubmit={this.handleSubmit} className="inner-login-container">
              <div className="signup-login-input-div">
                <input
                  className={errors['password'] ? `form-control login-input errored-input` : "form-control login-input" }
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />

                <p className={errors['email'] ? `signup-login-form-errors` : `hidden-errors` }>
                  {this.state.errors['email']}
                </p>
              </div>

              <div className="signup-login-input-div">

              <input
                className={errors['password'] ? `form-control login-input errored-input` : "form-control login-input" }
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />

              <p className={errors['password'] ? `signup-login-form-errors` : `hidden-errors` }>
              {this.state.errors['password']}
              </p>
              </div>

              <input 
              type="submit" 
              className="login-submit-btn btn btn-info" 
              value="Submit" 
              />

        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
