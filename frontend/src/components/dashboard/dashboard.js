import React from "react";
import ProfileContainer from "../profile/profile_container";
import Calendar from "./calendar/calendar";
import ReadOfTheDayContainer from './readOfTheDay/read_of_the_day'

import BookClubFeedContainer from '../profile/bookclubs_feed_container';
import BooksFeedContainer from '../profile/books_feed_container';
import PostFeedContainer from '../profile/posts_feed_container';
import MatchFeedContainer from '../profile/matches_feed_container';
import ProfilePreferences from "../profile/preferences_container";
import InvitesContainer from '../profile/invites_container'

class DashBoard extends React.Component {
  componentDidMount(){
    // const body = document.getElementsByClassName("dashboard-content-container")[0];
    // body.classList.add(`session-img`)
    // body.classList.add(`background-${Math.floor(Math.random() * 8) + 1}`);
  }
  componentWillUnmount() {
    this.props.resetEverything();
  }
  
  componentWillMount(){
    this.props.resetEverything()
    this.props.refreshUserInfo({user: this.props.currentUser["id"]}) 
  }


  render() {
    return (
      <div className="outer-dashboard-container">
          <div className="dashboard-content-container">
                <div className="left-side-dashboard-container">
                    < ProfileContainer />
                    < InvitesContainer />
                    <MatchFeedContainer/>
                </div>

                <div className="middle-side-dashboard-container">

                    <h1 className="dashboard-header">Recent Post Activity</h1>
                    <PostFeedContainer/>

                    <h1 className="dashboard-header">Casual Reading of The Day!</h1>
                    < ReadOfTheDayContainer />
                </div>

                <div className="right-side-dashboard-container">

                    <h1 className="dashboard-header">Calendar and Meeting Options</h1>
                    <Calendar />

                    <h1 className="dashboard-header" >Books</h1>
                    <BooksFeedContainer />

                    <h1 className="dashboard-header">Your bookclubs</h1>
                    <BookClubFeedContainer/>
                </div>
          
          </div>
    </div>
    );
    }
}

export default DashBoard;
