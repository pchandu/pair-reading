import React from 'react';

import Carousel from './innerParts/carousel';

import FrontPageTop from './innerParts/front_page_top'
import FrontPageRight from './innerParts/front_page_right'
import FrontPageLeft from './innerParts/front_page_left'
import FrontPageDashboard from './innerParts/front_page_dashboard'

import FrontPageSignup from './innerParts/front_page_signup'

class HomePage extends React.Component {

    render(){
        return(
            <div className="home-page-outer-container">
                {/* < FrontPageTop /> */}
                < FrontPageDashboard />
                < FrontPageRight />
                < FrontPageLeft />
                <div className="front-page-carousel-container-description">
                    <p>Don't take our word for it. Here are some testimonials!</p>
                </div>
                <div className="front-page-carousel-container">
                    <Carousel />
                </div>

                < FrontPageSignup />
            </div>
        )
    }
}

export default HomePage