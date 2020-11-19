import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

// import ForumIndexContainer from "./forum/forum_index_container";
import BookClubIndexContainer from "./bookclub/bookclub_index_container"
import PostIndexContainer from "./post/post_index_container"

import DashBoardContainer from './dashboard/dashboard_container';
import DashBoardCalFormContainer from './dashboard/calendar/cal_form';

import OnboardingContainer from "./onboarding/onboarding_container" 

import HomePage from './homepage/home'
import NoPage from './homepage/no_page'

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

import forum_show_container from "./forum/forum_show_container";
import bookclub_show_container from "./bookclub/bookclub_show_container";
// import ProfileContainer from "./profile/profile_container";


import AboutPage from './footer/about';
import user_show_container from "./user/user_show_container";
import BookShow from "./books/book_show_container";

import BookShowAll from "../components/books/book_show_all_container"


const App = () => (
  <>
  <div className="app-outside-container">
    <NavBarContainer />
    
    <div className="app-middle-container">
    <Switch>
      <ProtectedRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/signup" component={SignupFormContainer} />


      {/* //! testing */}
      {/* <AuthRoute exact path="/forums" component={ForumIndexContainer} /> */}
      <AuthRoute exact path="/bookclubs" component={BookClubIndexContainer} />
      <AuthRoute exact path="/posts" component={PostIndexContainer} />

      <AuthRoute exact path="/forums/:forumId" component={forum_show_container} />
      <AuthRoute exact path="/bookclubs/:bookclubId" component={bookclub_show_container} />
      <AuthRoute exact path="/users/:userId" component={user_show_container} />

    
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/book-show-all" component={BookShowAll} />



      <AuthRoute path="/dashboard" component={DashBoardContainer} />
      <AuthRoute path="/calendar-form" component={DashBoardCalFormContainer} />
      <AuthRoute exact path="/onboarding" component={OnboardingContainer} />
      <AuthRoute path="/books/:bookId" component={BookShow} />
      <Route exact path="/" component={HomePage} />
      <Route component={NoPage} />
    </Switch>
    </div>
  </div>
  </>
);

export default App;
