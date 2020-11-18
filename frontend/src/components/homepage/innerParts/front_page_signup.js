import React from 'react';
import { Link } from "react-router-dom";

class FrontPageSignup extends React.Component {
    render(){
        return(
            <div className="front-page-outer-container">
            <div className="front-page-signup-container">
                <p>So are you ready to start reading with others? If so...</p>
                <Link to="/signup" className="front-page-signup-link">Sign Up Now!</Link>
            </div>
            </div>
        )
    }
}

export default FrontPageSignup;