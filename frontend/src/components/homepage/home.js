import React from 'react';
import Carousel from './innerParts/carousel';

class HomePage extends React.Component {

    render(){
        return(
            <div className="home-page-outer-container">
                <Carousel />
            </div>
        )
    }
}

export default HomePage