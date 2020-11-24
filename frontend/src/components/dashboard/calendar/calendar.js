import React from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar-pane';
import moment from 'moment';




class DashboardCalendar extends React.Component {

  render() {
    return (
      <div>
        <Calendar className="react-calendar"
            // date={this.state.selectedDate}
            // onSelect={this.onSelect}
            // onClickDay={this.openModal} 
          />
      </div>
    )
  }
}
  //
  
export default DashboardCalendar;
  
  // <div className="cal-container">
  // <a
  //     href="https://accounts.google.com/signin/v2/identifier?service=cl&passive=1209600&osid=1&continue=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender&followup=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender&scc=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <button className="btn btn-info cal-btn"> Go to Google Calendar</button>
  //   </a>
  //   <Link to="/calendar-form">
  //     <button className="btn btn-info cal-btn">
  //       {" "}
  //       Fill out form for next meeting!{" "}
  //     </button>
  //   </Link>
  // </div>