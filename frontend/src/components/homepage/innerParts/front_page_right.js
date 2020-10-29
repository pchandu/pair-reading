import React from 'react'
import WomanReading from '../../../images/Samantha-photo.jpeg'
class FrontPageRight extends React.Component {
    render(){
        return(
            <div className="front-page-right-container">
                <p>Placeholders for life</p>
                <img src={WomanReading} alt="Woman reading in library"/>
            </div>
        )
    }
}

export default FrontPageRight;