import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';



import Logo from '../../../PR-Logo.png';
import WomanReading from "../../../images/Samantha-photo.jpeg";
import KidReading from "../../../images/Timmy-reads.jpg";
import PRSplash from "../../../images/home-page-splash2.png"



class FrontPageTop extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
      console.log(this.props);
    }


    render(){
      let signupButton = (this.props.loggedIn) ?   <div className="front-page-top-signup-link-not-logged-in "></div> : <Link to="/signup" className="front-page-top-signup-link"> Sign Up Now! </Link>;
        return (
          <div className="front-page-top-container">
            <img src={PRSplash} alt="Pair Reading Logo" />
            {/* <div className="front-page-top-text-container">
                    <h1>What is Pair Reading?</h1>
                    <p>A dedicated space, aimed to help you find reading pairs.</p>
                </div> */}
            {/* <Link to="/signup" className="front-page-top-signup-link">
              Sign Up Now!
            </Link> */}
            {signupButton}
          </div>
        );
    }
}

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

const mapDispatchToProps = dispatch => (
  {}
);

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageTop);
// export default FrontPageTop;