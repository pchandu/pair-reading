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

    this.props.signup(user)

    .then((res) => {
      if (res.type === "RECEIVE_USER_SIGN_IN" ){
        this.props.login({ email: user.email, password: user.password })
          .then(() =>  this.props.history.push("/onboarding") );
      } 

    })


    
  }


  render() {
    const {errors} = this.state;
    return (
      <div className="signup-div">
        <h1> Signup now and find your pair! </h1>
         <div className='errors-div'>
                 <p className={errors['email'] ? `signup-login-form-errors` : `hidden-errors` }>
                    {this.state.errors['email']}
                </p>

                 <p className={errors['username'] ? `signup-login-form-errors` : `hidden-errors` }>
                   {this.state.errors['username']}
                </p>

                 <p className={errors['password'] ? `signup-login-form-errors` : `hidden-errors` }>
                    {this.state.errors['password']}
                 </p>

                <p className={errors['password2'] ? `signup-login-form-errors` : `hidden-errors` }>
                  {this.state.errors['password2']}
                </p>

          </div>
        <form onSubmit={this.handleSubmit} className="inner-signup-container">

          <div className="signup-login-input-div">
            <input
              className={errors['email'] ? `form-control signup-input errored-input` : "form-control signup-input" }
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
         
            </div>

            <div className="signup-login-input-div">
            <input
              className={errors['username'] ? `form-control signup-input errored-input` : "form-control signup-input" }
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
           
            </div>

            <div className="signup-login-input-div">
            <input
              className={errors['password'] ? `form-control signup-input errored-input` : "form-control signup-input" }
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />            
           

            </div>

            <div className="signup-login-input-div">

            <input
              className={errors['password2'] ? `form-control signup-input errored-input` : "form-control signup-input" }
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />

            </div>

            <input
              type="submit"
              className="signup-submit-btn btn btn-info"
              value="Submit"
            />

        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
