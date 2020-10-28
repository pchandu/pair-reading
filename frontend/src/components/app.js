import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import ForumIndexContainer from "./forum/forum_index_container";
import BookClubIndexContainer from "./bookclub/bookclub_index_container"
import PostIndexContainer from "./post/post_index_container"

import DashBoardContainer from './dashboard/dashboard_container';
import OnboardingContainer from "./onboarding/onboarding_container" 

import HomePage from './homepage/home'
import NoPage from './homepage/no_page'

// import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import ProfileContainer from "./profile/profile_container";

const App = () => (
  <div>
    <NavBarContainer />

    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
  
      <Route exact path="/forums" component ={ForumIndexContainer}/>
      <Route exact path="/bookclubs" component ={BookClubIndexContainer}/>
      <Route exact path="/posts" component ={PostIndexContainer}/>

      <AuthRoute path="/dashboard" component ={DashBoardContainer}/>

      <Route exact path="/onboarding" component={OnboardingContainer} /> 
      {/* ^^^^^MAKE THIS AN AUTHROUTE ONCE CURRENT USER STUFF IS GOOD IN STATE */}
      <Route exact path="/" component={HomePage} />
      <Route component={NoPage}/>
    </Switch>

  </div>
);

export default App;
