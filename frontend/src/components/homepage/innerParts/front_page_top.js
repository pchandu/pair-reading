import React from 'react'

import Logo from '../../../PR-Logo.png';

class FrontPageTop extends React.Component {
    render(){
        return(
            <div className="front-page-top-container">
                <img src={Logo} alt="Pair Reading Logo"/>
                <div className="front-page-top-text-container">
                    <h1>What is Pair Reading?</h1>
                    <p>Pair Reading is a website designed for you to find reading partners interested in the same books as you.</p>
                </div>
            </div>
        )
    }
}

export default FrontPageTop;