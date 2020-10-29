import React from 'react'
import WomanReading from '../../../images/Samantha-photo.jpeg'
class FrontPageRight extends React.Component {
    render(){
        return(
            <div className="front-page-right-container">
                <img src={WomanReading} alt="Woman reading in library"/>
                <p>Placeholders for life</p>
            </div>
        )
    }
}

export default FrontPageRight;