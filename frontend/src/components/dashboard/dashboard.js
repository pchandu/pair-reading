import React from 'react'
import ProfileContainer from '../profile/profile_container'
import Calendar from './calendar/calendar'


class DashBoard extends React.Component {

    render(){
        return(
            <div className="outer-dashboard-container">
                <div className="dashboard-content-container">
                    
                    <div className="left-side-dashboard-container">
                        <ProfileContainer />
                    </div>

                    <div className="middle-side-dashboard-container">

                    </div>

                    <div className="right-side-dashboard-container">
                        <Calendar />
                    </div>

                </div>
            </div>
        )
    }
}

export default DashBoard;