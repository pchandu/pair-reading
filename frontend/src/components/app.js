import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import DashBoardContainer from './dashboard/dashboard_container';

// import TweetsContainer from "./tweets/tweets_container";
// import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import ProfileContainer from "./profile/profile_container";
// import TweetComposeContainer from "./tweets/tweet_compose_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />

      <Route path="/dashboard" component={DashBoardContainer} />
    </Switch>
  </div>
);

export default App;
