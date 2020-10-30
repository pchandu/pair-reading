import React from "react";
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
      <div>
        <button >Go to Google Calendar</button>
      </div>
    );
  }
}
//

export default Calendar;
