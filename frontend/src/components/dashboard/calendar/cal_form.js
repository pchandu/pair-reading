import React from "react";
import "react-dates/initialize";
import MeetingDatePicker from "./date_picker"
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from "react-bootstrap";

class CalendarForm extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            type: "calendar",
            invitee: "Select the match you want to invite",
            title: "",
            date: null,
            book: "Select the book you'd like to meet about",
            errors: '',
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleInvitee = this.handleInvitee.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.handleMatch = this.handleMatch.bind(this);
        this.handleBook = this.handleBook.bind(this);
    }
  
    handleTitle(e){
        this.setState({title: e.currentTarget.value});
    }

    handleInvitee(e){
        this.setState({invitee: e.currentTarget.value});
    }

    handleMatch(e){
        this.setState({invitee: e.currentTarget.title});
    }

    handleBook(e){
        this.setState({book: e.currentTarget.title});
        // debugger
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
                } else {
                    let msg = res.data.msg
                    this.props.showForm(0, msg)
                    this.props.refreshUserInfo({user: userId})
                }
            })
    }

    render() {
        const matches = 
        <DropdownButton 
        title={this.state.invitee} 
        className="cal-form-dropdown"
        key='Info'
        id={`dropdown-info`}
        variant={`info`.toLowerCase()}
        size="sm">
            {this.props.matches.map((match, i) => {
            return(
                <Dropdown.Item key={i} title={match.username} onClick={this.handleMatch}>{match.username}</Dropdown.Item>
            )
        })}
        </DropdownButton>
        
        const books = 
        <DropdownButton title={this.state.book} 
        className="cal-form-dropdown"
        key='Info'
        id={`dropdown-info`}
        variant={`info`.toLowerCase()}
        size="sm">
            {this.props.books.map((book, i) => {
            return(
                <Dropdown.Item key={i} title={book.title} onClick={this.handleBook}>{book.title}</Dropdown.Item>
            )
        })}
        </DropdownButton>

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
                        {matches}
                    </label>
                    <label><div className="cal-form-label">Book:</div>
                        {books}
                    </label>
                    <button 
                    className='cal-invite-submit-btn match-user-invite'
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        );
  }
}

export default CalendarForm;
