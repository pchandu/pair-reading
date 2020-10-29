import React from 'react';

import CarouselLeft from './innerParts/carousel-left';
import CarouselRight from './innerParts/carousel-right'

import FrontPageLeft from './innerParts/front_page_left'
import FrontPageRight from './innerParts/front_page_right'
import FrontPageTop from './innerParts/front_page_top'

class HomePage extends React.Component {

    render(){
        return(
            <div className="home-page-outer-container">
                < FrontPageTop />
                < FrontPageLeft />
                < FrontPageRight />
                <div className="front-page-carousel-container">
                <CarouselLeft  />
                <CarouselRight />
                </div>
            </div>
        )
    }
}

export default HomePage