import React from 'react';


class Onboarding extends React.Component {
    // constructor(props){
    //     super(this)
    // }

    render(){
        return(
            <div className="onboarding-container">
                <ul className="preferences-container"> 
                    <li className="preferences">
                        <input type="checkbox" id="preference-morning" name="preference-morning" />
                        <p>Morning (8am-12pm)</p>
                    </li>
                    <li className="preferences">
                        <input type="checkbox" id="preference-morning" name="preference-morning" />
                        <p>Afternoon (12pm-4pm)</p>
                    </li>
                    <li className="preferences">
                        <input type="checkbox" id="preference-morning" name="preference-morning" />
                        <p>Evening (5pm-9pm)</p>
                    </li>
                </ul>

                <div className="books-container">
                    <ul>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Onboarding