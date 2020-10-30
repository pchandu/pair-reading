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

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

import Footer from './footer/footer';
import AboutPage from './footer/about';

const App = () => (
  <>
  <div className="app-outside-container">
    <NavBarContainer />
    
    <div className="app-middle-container">
    <Switch>
      <ProtectedRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/signup" component={SignupFormContainer} />

      <Route exact path="/forums" component={ForumIndexContainer} />
      <Route exact path="/bookclubs" component={BookClubIndexContainer} />
      <Route exact path="/posts" component={PostIndexContainer} />
      <Route exact path="/about" component={AboutPage} />

      <AuthRoute path="/dashboard" component ={DashBoardContainer}/>
      <AuthRoute exact path="/onboarding" component={OnboardingContainer} /> 

      <Route exact path="/" component={HomePage} />
      <Route component={NoPage} />
    </Switch>
    </div>

    <Footer />
  </div>
  </>
);

export default App;
