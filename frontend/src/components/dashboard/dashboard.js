import React from "react";
import ProfileContainer from "../profile/profile_container";
import Calendar from "./calendar/calendar";
import ReadOfTheDayContainer from './readOfTheDay/read_of_the_day'

class DashBoard extends React.Component {

  componentWillUnmount() {
    this.props.removeAllUsers();
  }

  render() {
    return (
      <div className="outer-dashboard-container">
          <div className="dashboard-content-container">
              <div className="left-side-dashboard-container">
                < ProfileContainer />
              </div>

              <div className="middle-side-dashboard-container">
                  < ReadOfTheDayContainer />
              </div>

              <div className="right-side-dashboard-container">
                  <Calendar />
              </div>
          
              </div>
          </div>
    );
    }
}

export default DashBoard;
