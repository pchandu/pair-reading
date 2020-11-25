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
            date: null,
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }
  
    handleTitle(e){
        this.setState({title: e.currentTarget.value});
    }

    onDateChange(date) {
        this.setState({date: date})
    }

    render() {
        return (
            <div className='meeting-invite-form-container'>
                <h1 className="cal-form-header">
                    Fill out a form to schedule your next meeting!
                </h1>
                <label>Title:
                    <input type="text" 
                    value={this.state.title} 
                    onChange={this.handleTitle}/>
                </label>

                <div className='date-picker-form-container'>
                    <label>Date:
                    <MeetingDatePicker 
                    date={this.state.date} 
                    onDateChange={this.onDateChange}/>
                    </label>
                        {/* {console.log(this.props.matches)} this works */}
                </div>
            </div>
        );
  }
}

export default CalendarForm;
