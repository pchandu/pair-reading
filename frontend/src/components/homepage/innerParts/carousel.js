import React from 'react';
import {Carousel} from 'react-bootstrap';

import Headshot1 from '../../../images/Headshot1.jpg';
import Headshot2 from '../../../images/Headshot2.jpg';
import Praneeth from '../../../images/Praneeth_Chandu.jpg';

class CarouselItem extends React.Component {
    render(){
        return(
        <div className="home-page-carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img src={Headshot1} alt="Headshots"/>
                    <Carousel.Caption>
                    <h3>Timmy</h3>
                    <h2>Number one fan of the Harry Potter Series.</h2>
                    <p>I like books and finding people that also like books. Pair reading helped me accomplish my goal!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Headshot2} alt="Headshots"/>
                    <Carousel.Caption>
                    <h3>Samantha</h3>
                    <h2>Loves having a martini to go with a nice romance novel.</h2>
                    <p>Since joining the amount of books I've read increased by 200%!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Praneeth} alt="Praneeth"/>
                    <Carousel.Caption>
                    <h3>Praneeth</h3>
                    <h2>Enjoys Meditative reading sessions with other peope.</h2>
                    <p>I ended up coming up with this website and enjoy every minute of it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        )
    }
}

export default CarouselItem;