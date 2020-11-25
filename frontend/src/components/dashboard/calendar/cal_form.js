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
        this.handleInvitee = this.handleInvitee.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }
  
    handleTitle(e){
        this.setState({title: e.currentTarget.value});
    }

    handleInvitee(e){
        this.setState({invitee: e.currentTarget.value});
    }

    onDateChange(date) {
        this.setState({date: date})
    }

    handleSubmit(){
        const inviteInfo = Object.assign({},{invite: this.state}, {userId: this.props.userId});
        this.props.createCalInvite(inviteInfo);
        //mDTP our backend call 
        //send invite into backend
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
                    <label> Invitee Username:
                        <input 
                        type="text" 
                        value={this.state.invitee}
                        onChange={this.handleInvitee} />
                    </label>
                    <button 
                    className='cal-invite-submit-btn'
                    onClick={this.handleSubmit}>
                        Submit
                    </button>    
                        {/* {console.log(this.props.matches)} this works */}
                </div>
            </div>
        );
  }
}

export default CalendarForm;
