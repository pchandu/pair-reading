import React from 'react';
import {Carousel} from 'react-bootstrap';

import Kat from '../../../images/Kathy_Chan.jpg';
import Praneeth from '../../../images/Praneeth_Chandu.jpg';
import AlexzanderArchibeque from '../../../images/Alexzander_Archibeque.jpg';
import Kevin from '../../../images/kevin_su.jpg';

class CarouselItem extends React.Component {


    render(){
        return(
            <div className="outside-carousel-container">
        <div className="home-page-carousel-container">
            <Carousel >
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
                <Carousel.Item >
                    <div className="carousel-item-container">
                    <img src={AlexzanderArchibeque} alt="Alexzander" className="alex-picture-carousel"/>
                    <Carousel.Caption>
                    <h3>Alexzander</h3>
                    <h2>Enjoys reading while drinking coffee in the morning.</h2>
                    <p>"I couldn't come up with a good quote for this but, get a partner and read!"</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="carousel-item-container">
                    <img src={Kevin} alt="Kevin"/>
                    <Carousel.Caption>
                    <h3>Kevin Su</h3>
                    <h2>Enjoys finding engaging partners</h2>
                    <p>"Telling people how they read in the forums is the best part, but I enjoy my reading partners!"</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
        )
    }
}

export default CarouselItem;