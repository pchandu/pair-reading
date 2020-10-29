import React from 'react';
import {Carousel} from 'react-bootstrap';

import Headshot2 from '../../../images/Headshot2.jpg';
import AlexzanderArchibeque from '../../../images/Alexzander_Archibeque.jpg';
import Kevin from '../../../images/kevin_su.jpg';

class CarouselItem extends React.Component {

    render(){
        return(
        <div className="home-page-carousel-container">
            <Carousel >
                <Carousel.Item >
                    <div className="carousel-item-container">
                    <img src={Headshot2} alt="Headshots"/>
                    <Carousel.Caption>
                    <h3>Timmy</h3>
                    <h2>Number one fan of the Harry Potter Series.</h2>
                    <p>"I like books and finding people that also like books. Pair reading helped me accomplish my goal!"</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="carousel-item-container">
                    <img src={AlexzanderArchibeque} alt="Alexzander"/>
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
        )
    }
}

export default CarouselItem;