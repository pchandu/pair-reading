import React from 'react'

import KidReading from '../../../images/Timmy-reads.jpg'

class FrontPageLeft extends React.Component {
    render(){
        return(
            <div className="front-page-left-container">
                <img src={KidReading} alt="Kid reading in library"/>
                <div className="front-page-left-text-container">
                    <h1>Finding people to enjoy a great book with you can be hard.</h1>
                    <p>The Tools developed at Pair Reading aim to make the process
                        of finding a someone just as passionate as you about reading.
                        Giving you tools to allow you to make plans on when to discuss,
                        read, or just a little banter with another person who loves to read.
                    </p>
                </div>
            </div>
        )
    }
}

export default FrontPageLeft;