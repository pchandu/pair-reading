import React from "react";
import logo from "../../PR-Logo.png";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
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
        </nav>
      </div>
    );
  }

};

export default NavBar;