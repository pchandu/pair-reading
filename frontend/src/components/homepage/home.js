import React from 'react';

import CarouselLeft from './innerParts/carousel-left';
import CarouselRight from './innerParts/carousel-right'

import FrontPageTop from './innerParts/front_page_top'
import FrontPageRight from './innerParts/front_page_right'
import FrontPageLeft from './innerParts/front_page_left'

import FrontPageSignup from './innerParts/front_page_signup'

class HomePage extends React.Component {

    render(){
        return(
            <div className="home-page-outer-container">
                < FrontPageTop />
                < FrontPageRight />
                < FrontPageLeft />
                <div className="front-page-carousel-container-description">
                    <p>Don't take our word for it, Here are some testimonials from happy people using Pair Reading!</p>
                </div>
                <div className="front-page-carousel-container">
                    <CarouselLeft  />
                    <CarouselRight />
                </div>

                < FrontPageSignup />
            </div>
        )
    }
}

export default HomePage