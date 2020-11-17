import React from 'react'

import Logo from '../../../PR-Logo.png';

class FrontPageTop extends React.Component {
    render(){
        return(
            <div className="front-page-top-container">
                <img src={Logo} alt="Pair Reading Logo"/>
                <div className="front-page-top-text-container">
                    <h1>What is Pair Reading?</h1>
                    <p>A dedicated space, aimed to help you find reading pairs.</p>
                </div>
            </div>
        )
    }
}

export default FrontPageTop;