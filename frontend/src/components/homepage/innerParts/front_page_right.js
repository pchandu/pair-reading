import React from 'react'
import WomanReading from '../../../images/Samantha-photo.jpeg'
class FrontPageRight extends React.Component {
    constructor(props){
        super(props)
        window.addEventListener("scroll", () => {
            let scrollPos = window.scrollY;
            if(scrollPos >= 1200){
                let imgEle = document.getElementById('front-page-right-container-img')
                imgEle.classList.add("fadeIn")
            }
        })
    }
    render(){
        return(
            <div className="front-page-right-container">
                <div className="front-page-right-text-container">
                    <h1>Have you started a book only to shelve it a couple of minutes later?</h1>
                    <p>
                        At Pair Reading we aim to give you that structure and facilitate easy to use 
                        options when needing that extra little push towards a good book.
                    </p>
                </div>
                <img src={WomanReading}
                id="front-page-right-container-img" 
                className="front-page-right-container-img"
                alt="Woman reading in library"/>
            </div>
        )
    }
}

export default FrontPageRight;