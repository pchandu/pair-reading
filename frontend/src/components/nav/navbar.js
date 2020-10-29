import React from "react";
import logo from "../../PR-Logo.png";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }


   getLinks() {
    //    debugger
    if (this.props.loggedIn !== true) {
      return (
         <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login">
                <button type="button" className="navbar-btn">
                  Sign In
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">
                <button type="button" className="navbar-btn">
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
                    <button type="button" className="navbar-btn">
                      Dashboard
                    </button>
                  </Link>
              </li>
              
                <li className="nav-item">
                    <button className="navbar-btn" onClick={() => this.props.logout()}>Sign Out</button>
                </li>
              
            </ul>
            
          );
      }
    }

  render() {
    return (
      <div>
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
        </nav>
      </div>
    );
  }
}

export default NavBar;