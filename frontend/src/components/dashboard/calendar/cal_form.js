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
            invitee: "",
            title: "",
            date: null,
            book: "",
            errors: '',
            showMatches: false,
            showBooks: false
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleInvitee = this.handleInvitee.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.showMatches = this.showMatches.bind(this);
        this.handleMatch = this.handleMatch.bind(this);
        this.showBooks = this.showBooks.bind(this);
        this.handleBook = this.handleBook.bind(this);
    }
  
    handleTitle(e){
        this.setState({title: e.currentTarget.value});
    }

    handleInvitee(e){
        this.setState({invitee: e.currentTarget.value});
    }

    showMatches(e){
        e.preventDefault();

        this.setState({
            showMatches: !this.state.showMatches
        })
    }

    handleMatch(e){
        this.setState({invitee: e.currentTarget.outerText});
        debugger
        this.showMatches(e);
    }
    
    showBooks(e){
        e.preventDefault();

        this.setState({
            showBooks: !this.state.showBooks
        })
    }

    handleBook(e){
        // debugger
        this.setState({book: e.currentTarget.value});
        this.showBooks(e);
    }

    onDateChange(date) {
        this.setState({date: date})
    }

    handleSubmit(){
        const invite = Object.assign({}, 
            {invite: this.state.type, invitee: this.state.invitee, title: this.state.title, date: this.state.date, errors: this.state.errors});
        const inviteInfo = Object.assign({},{invite: invite}, {userId: this.props.userId});
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
        // const matches = !this.state.showMatches ? (<select name="matches" id="matches" onClick={this.showMatches}></select>) :
        // <div className="cal-form-dropdown">
        // {this.props.matches.map((match, i) => {
        //     return(
        //         <button key={i} value={match.username} onClick={this.handleMatch}>{match.username}</button>
        //     )
        // })}
        // </div>;
        
        // const books = !this.state.showBooks ? (<select name="books" id="books" onClick={this.showBooks}></select>) :
        // <div className="cal-form-dropdown">
        // {this.props.books.map((book, i) => {
        //     return(
        //         <button key={i} value={book.title} onClick={this.handleBook}>{book.title}</button>
        //     )
        // })}
        // </div>;

        const matches = 
        <DropdownButton>
            {this.props.matches.map((match, i) => {
            return(
                <Dropdown.Item key={i} value={match.username} onClick={this.handleMatch}>{match.username}</Dropdown.Item>
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
                        {/* {books} */}
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
