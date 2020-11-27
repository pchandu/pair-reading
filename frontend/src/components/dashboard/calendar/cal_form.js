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
            errors: ''
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
        const userId = this.props.userId

        this.props.createCalInvite(inviteInfo)
            .then((res) => {
                if(res.data.err){
                    this.setState({errors: res.data.err})
                }else{
                    let msg = res.data.msg
                    this.props.showForm(0, msg)
                    this.props.refreshUserInfo({user: userId})
                }
            })

    }

    render() {
        return (
            <div className='meeting-invite-form-container'>
                <h1 className="cal-form-header">
                    Fill out a form to schedule your next meeting!
                </h1>

                <div 
                className={`${this.state.errors ? "show-flex errors-div-for-cal-invites-form" : "hidden"}`}> 
                {this.state.errors} 
                </div>

                <label><div className="cal-form-label">Title:</div>
                    <input type="text" 
                    value={this.state.title} 
                    onChange={this.handleTitle}/>
                </label>

                <div className='date-picker-form-container'>
                    <label><div className="cal-form-label">Date:</div>
                    <MeetingDatePicker 
                    date={this.state.date} 
                    onDateChange={this.onDateChange}
                    className="datepicker-container"/>
                    </label>
                    <label><div className="cal-form-label">Invitee Username:</div>
                        <input 
                        type="text" 
                        value={this.state.invitee}
                        onChange={this.handleInvitee} />
                    </label>
                    <button 
                    className='cal-invite-submit-btn match-user-invite'
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
