import React from 'react'

import Logo from '../../../PR-Logo.png';

class FrontPageTop extends React.Component {
    render(){
        return(
            <div className="front-page-top-container">
                <img src={Logo} alt="Pair Reading Logo"/>
                <p>Pair Reading Description</p>
            </div>
        )
    }
}

export default FrontPageTop;