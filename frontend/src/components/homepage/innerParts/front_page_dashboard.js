import React from 'react'
import DashboardPic from '../../../images/Dashboard.png'

class FrontPageDashboard extends React.Component {
    constructor(props){
        super(props)

        window.addEventListener("scroll", () => {
            let scrollPos = window.scrollY;
            if(scrollPos >= 200){
                let imgEle = document.getElementById('front-page-dashboard-image')
                imgEle.classList.add("fadeIn")
            }
        })
    }

    render(){
        return(
            <div className="front-page-dashboard-container">
                <h1> 
                    Use our systems dedicated to finding you partners in any
                    genre of books you are interested in!
                </h1>
                <img src={DashboardPic} 
                alt="dashboard image"
                id="front-page-dashboard-image" 
                className="front-page-dashboard-container-img" />
            </div>
        )
    }
}

export default FrontPageDashboard;