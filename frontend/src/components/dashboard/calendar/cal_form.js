import React from "react";
import "react-dates/initialize";
import MeetingDatePicker from "./date_picker"

class CalendarForm extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            type: "calendar",
            invitee: "",
            title: "",
            date: new Date(),
            start_time: "",
            end_time: ""
        }

        this.handleTitle = this.handleTitle.bind(this);
    }
  
    handleTitle(e){
        this.setState({title: e.currentTarget.value});
    }

    render() {
        return (
            <div className='meeting-invite-form-container'>
                <h1>
                    
                </h1>
                <div className='date-picker-form-container'>
                    <MeetingDatePicker />
                </div>
            </div>
        );
  }
}

export default CalendarForm;
