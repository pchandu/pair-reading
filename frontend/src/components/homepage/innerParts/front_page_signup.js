import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class FrontPageSignup extends React.Component {
    render(){
        let signupButton = (this.props.loggedIn) ? <div className="front-page-signup-link-logged-in"></div> : <Link to="/signup" className="front-page-signup-link">Sign Up Now!</Link>;
        return(
            <div className="front-page-outer-container">
            <div className="front-page-signup-container">
                <p>Are you ready to begin reading?</p>
                {/* <Link to="/signup" className="front-page-signup-link">Sign Up Now!</Link> */}
                {signupButton}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

const mapDispatchToProps = dispatch => (
  {}
);

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageSignup);
// export default FrontPageSignup;