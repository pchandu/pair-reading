import React from "react";
import { Link } from "react-router-dom";
// import { gapi } from 'gapi-script'


class Calendar extends React.Component {
  // var gapi = window.gapi;

  // let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  // let SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  // const startCalendar = () => {
  //     gapi.load('client:auth2', () => {
  //       console.log("Loaded client")

  //       gapi.client.init({
  //         apiKay: API_KEY,
  //         clientId: CLIENT_ID,
  //         discoveryDocs: DISCOVERY_DOCS,
  //         scope: SCOPES
  //       })

  //       gapi.client.load('calendar', 'v3', () => console.log('WOOHOo magics'))

  //       gapi.auth2.getAuthInstance().signIn()
  //     })
  // }

  render() {
    return (
      <div className="cal-container">
        <a
          href="https://accounts.google.com/signin/v2/identifier?service=cl&passive=1209600&osid=1&continue=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender&followup=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender&scc=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-info cal-btn"> Go to Google Calendar</button>
        </a>
        <Link to="/calendar-form">
          <button className="btn btn-info cal-btn">
            {" "}
            Fill out form for next meeting!{" "}
          </button>
        </Link>
      </div>
    );
  }
}
//

export default Calendar;
