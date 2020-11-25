import React from 'react'
import DashboardPic from '../../../images/Dashboard.png'

class FrontPageDashboard extends React.Component {
    constructor(props){
        super(props)
        this.onScroll = this.onScroll.bind(this)
    }
    
    componentDidMount(){
        window.addEventListener("scroll", this.onScroll)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.onScroll)
    }

    onScroll(){ 
        let scrollPos = window.scrollY;
        if(scrollPos >= 400){
            let imgEle = document.getElementById('front-page-dashboard-image')
            imgEle.classList.add("fadeIn")
        }
    }

    render(){
        return(
            <div className="front-page-dashboard-container">
                <h1> 
                    Use our systems to find reading partners!
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