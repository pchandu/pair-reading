import React from 'react';
import {Carousel} from 'react-bootstrap';

import Headshot1 from '../../../images/Headshot1.jpg';
import Kat from '../../../images/Kathy_Chan.jpg';
import Praneeth from '../../../images/Praneeth_Chandu.jpg';

class CarouselItem extends React.Component {


    render(){
        return(
        <div className="home-page-carousel-container">
            <Carousel >
                <Carousel.Item >
                    <div className="carousel-item-container">
                    <img src={Headshot1} alt="Headshots"/>
                    <Carousel.Caption>
                    <h3>Samantha</h3>
                    <h2>Loves having a martini to go with a nice romance novel.</h2>
                    <p>"Since joining the amount of books I've read increased by 200%!"</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="carousel-item-container">
                    <img src={Kat} alt="Kat"/>
                    <Carousel.Caption>
                    <h3>Kat Chan</h3>
                    <h2>Really enjoyes having her Plushies read with her.</h2>
                    <p>"I enjoy my time on pair reading everyday and enjoy reading with all of you!"</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="carousel-item-container">
                    <img src={Praneeth} alt="Praneeth"/>
                    <Carousel.Caption>
                    <h3>Praneeth</h3>
                    <h2>Enjoys Meditative reading sessions with other people.</h2>
                    <p>"I ended up coming up with this website and enjoy every minute of it."</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        )
    }
}

export default CarouselItem;