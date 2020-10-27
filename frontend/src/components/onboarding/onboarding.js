import React from 'react';


class Onboarding extends React.Component {
    // constructor(props){
    //     super(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    // handleSubmit(){

    // }

    render(){
        return(
            <div className="onboarding-container">
                <form className="onboarding-form">
                    <h1>What time of day works best for you to meet with a partner?</h1>
                    <ul className="preferences-container"> 
                        <li className="preferences">
                            <input type="checkbox" id="preference-morning" name="preference-morning" className="checkbox"/>
                            <p className="preferences-time-of-day">Morning</p>
                            <p className="preferences-timing">(8am-12pm)</p>
                        </li>
                        <li className="preferences">
                            <input type="checkbox" id="preference-afternoon" name="preference-afternoon" className="checkbox"/>
                            <p className="preferences-time-of-day">Afternoon </p>
                            <p className="preferences-timing">(12pm-4pm)</p>
                        </li>
                        <li className="preferences">
                            <input type="checkbox" id="preference-evening" name="preference-evening" className="checkbox"/>
                            <p className="preferences-time-of-day">Evening</p>
                            <p className="preferences-timing">(5pm-9pm)</p>
                        </li>
                    </ul>
                </form>
                <div className="books-container">
                    <ul>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Onboarding