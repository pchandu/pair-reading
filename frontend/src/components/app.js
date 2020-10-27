import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
// import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import OnboardingContainer from "./onboarding/onboarding" //UPDATE TO CONTAINER ONCE CONTAINER IS READY
const App = () => (
  <div>
    <NavBarContainer />
    <OnboardingContainer />
  </div>
);

export default App;
