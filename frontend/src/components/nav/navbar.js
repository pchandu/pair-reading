import React from "react";
import logo from "../../PR-Logo.png";
// import { Link } from "react-router-dom";


class NavBar extends React.Component {

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg nav-bg navbar-left">
                    <a className="navbar-brand" href="#">
                         <img src={logo} width="auto" height="50" className="d-inline-block align-top nav-bg" alt="Pair Reading Logo" />
                    </a>

                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button type="button" className="navbar-btn">Sign In</button>
                        </li>
                        <li className="nav-item">
                             <button type="button" className="navbar-btn">Sign Up</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default NavBar;