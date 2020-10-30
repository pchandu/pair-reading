import React from 'react'
import {Link} from 'react-router-dom'

class Footer extends React.Component {

    render() {
        return(
            <div className="footer-outside-container">
                <div className="footer-left-side-container">
                    Pair Reading LLC © 2020
                </div>

                <div className="footer-middle-container">
                </div>

                <div className="footer-right-side-container">
                    <Link to="about" className="footer-link">About Us</Link>
                </div>
            </div>
        )
    }
}

export default Footer;