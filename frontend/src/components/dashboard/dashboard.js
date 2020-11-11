import React from "react";
import ProfileContainer from "../profile/profile_container";
import MatchFeedContainer from "../profile/matches_feed_container"
import Calendar from "./calendar/calendar";
import ReadOfTheDayContainer from './readOfTheDay/read_of_the_day'
import MakeBookClubModal from "../profile/bookclubs/make_bookclub";

import makeBookClubModal from '../profile/bookclubs/make_bookclub'

class DashBoard extends React.Component {
  componentDidMount(){
    const body = document.getElementsByClassName("dashboard-content-container")[0];
    body.classList.add(`session-img`)
    body.classList.add(`background-${Math.floor(Math.random() * 8) + 1}`);
  }
  componentWillUnmount() {
    this.props.removeAllUsers();
  }

  modalSendInfo(){

  }

  render() {
    return (
      <div className="outer-dashboard-container">
          <div className="dashboard-content-container">
                <button onClick={this.modalSendInfo}>TestModal</button>
                <MakeBookClubModal />
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
