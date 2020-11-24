import React from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

class CalendarForm extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            type: "calendar",
            invitee: "",
            title: "",
            date: "",
            start_time: "",
            end_time: ""
        }
    }
  
    handleTitle(e){
        this.setState({title: e.currentTarget.value});
    }
    
    render() {
        return (
            <div className='meeting-invite-form-container'>

                <div className='date-picker-form-container'>
                     <SingleDatePicker
                        date={this.state.date} // momentPropTypes.momentObj or null
                        onDateChange={(date) => this.setState({ date: date })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        id="your_unique_id" // PropTypes.string.isRequired,
                        placeholder="Meeting Date"
                        numberOfMonths={1}
                        // openDirection="up"
                    />
                </div>
            </div>
        );
  }
}

export default CalendarForm;
