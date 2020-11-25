import React from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar-pane';
import moment from 'moment';

import CalendarForm from './cal_form_container';
import ShowMeetingForm from './show_meetings_form';


class DashboardCalendar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedDate: moment(),
      showForm: 0,
      responseMessage: ''
    }

    this.onSelect = this.onSelect.bind(this);
    this.showForm = this.showForm.bind(this)
  }
  
  componentDidMount(){
    const days = document.getElementsByClassName("Day");
    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const button = day.children[0];
      day.addEventListener("click", () => button.click());
    }

  }

  onSelect(e) {
    // e._d === date of the moment
    // let stripped_string = req.body.creator.replace(/\"/g, "")
    let date = JSON.stringify(e._d).replace(/\"/g, "").slice(0,10)
    // "YYYY-MM-DD" Object Type STRING
    this.setState({ selectedDate: date, showForm: 2});

    // meetings: [{date: "", partner: "", time: ""},{},{}]
  }

  showForm(num){
    // debugger;
    this.setState({
      showForm: num,
      // responseMessage: msg
    })
  }

  render() {
    //constant that if true, renders our form, if false, shows upcoming meetings
    const showForm = this.state.showForm;
    let generalForm;
    
    if(showForm === 1){
      generalForm = < CalendarForm showForm={this.showForm}/>;
    } else if(showForm === 2){
      generalForm = <ShowMeetingForm 
      meetings={this.props.meetings}
      selectedDate={this.state.selectedDate}/>
    } else {
      generalForm = ''
    } 
    
    
    return (
      <div className="outer-div-container-calendar">
          <div>
            <p>Click on a date in your calendar to 
              <br></br>
              see if you have any meetings then
            </p>
            <Calendar 
                className="react-calendar"
                onSelect={this.onSelect}
              />
              <button 
              className="schedule new meeting"
              onClick={() => this.showForm(1)}
              >
                {/* On click that updates state that rerenders */}
                {/* When true render thing */}
                Schedule New meetings
              </button>
          </div>

          <div>
            {/* {this.state.responseMessage} */}
            {generalForm}
          </div>
      </div>
    )
  }
}

  
export default DashboardCalendar;
