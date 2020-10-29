import React from 'react'

import KidReading from '../../../images/Timmy-reads.jpg'

class FrontPageLeft extends React.Component {
    render(){
        return(
            <div className="front-page-left-container">
                <img src={KidReading} alt="Kid reading in library"/>
                <p>Soon to be filled to the brim</p>
            </div>
        )
    }
}

export default FrontPageLeft;