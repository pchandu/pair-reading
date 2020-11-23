import React from "react";
import logo from "../../PR-Logo.png";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }
  componentDidMount(){
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  // demo@pairreading.com
  // ilovereading
  demoUser(){
    this.props.login({
      email: "demo@pairreading.com",
      password: "ilovereading"
    })
  }
  // btn btn-info cal-btn
   getLinks() {
    //    debugger
    if (this.props.loggedIn !== true) {
      return (
         <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button type="button" className="navbar-btn btn btn-info"
                onClick={() => this.demoUser()}
              >Demo</button>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <button type="button" className="navbar-btn btn btn-info">
                  Sign In
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">
                <button type="button" className="navbar-btn btn btn-info">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
      )} else {
          return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/dashboard">
                    <button type="button" className="navbar-btn btn btn-info">
                      Dashboard
                    </button>
                  </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/forums">
                  <button type="button" className="navbar-btn btn btn-info">
                    Forums
                    </button>
                </Link>
              </li> */}

                <li className="nav-item">
                <Link to="/book-show-all">
                  <button type="button" className="navbar-btn btn btn-info">
                    All Books
                    </button>
                </Link>
              </li>
              
                <li className="nav-item">
                    <button className="navbar-btn btn btn-info" onClick={() => this.props.logout()}>Sign Out</button>
                </li>
              
            </ul>
            
          );
      }
    }

  render() {
    return (
      <div className="navbar-outer-container">
        <nav className="navbar navbar-expand-lg nav-bg navbar-left">
          <a className="navbar-brand" href="#/">
            <img
              src={logo}
              width="auto"
              height="50"
              className="d-inline-block align-top nav-bg"
              alt="Pair Reading Logo"
            />
          </a>

          {this.getLinks()}
          <Link to="/about">
          <button className="navbar-btn btn btn-info">About Us</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;