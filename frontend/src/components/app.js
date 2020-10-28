import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import ForumIndexContainer from "./forum/forum_index_container";
import BookClubIndexContainer from "./bookclub/bookclub_index_container"
import PostIndexContainer from "./post/post_index_container"

import DashBoardContainer from './dashboard/dashboard_container';
import OnboardingContainer from "./onboarding/onboarding" //UPDATE TO CONTAINER ONCE CONTAINER IS READY

// import TweetsContainer from "./tweets/tweets_container";
// import MainPage from "./main/main_page";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
// import ProfileContainer from "./profile/profile_container";
// import TweetComposeContainer from "./tweets/tweet_compose_container";

const App = () => (
  <div>
    <NavBarContainer />
    {/* <OnboardingContainer /> */}
      <Switch>
        {/* <Route path="/dashboard" component ={DashBoardContainer}/> */}
        <Route exact path="/forums" component ={ForumIndexContainer}/>
        <Route exact path="/bookclubs" component ={BookClubIndexContainer}/>
        <Route exact path="/posts" component ={PostIndexContainer}/>
      </Switch>
  </div>
);

export default App;
