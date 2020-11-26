import React from 'react'


class ShowMeetingsForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="show-meetings-container">
            <h1>Meetings on {this.props.selectedDate}</h1>
        <ul>
        {this.props.meetings.map((meeting, idx) => {
            if(this.props.selectedDate === meeting.date){
            return(
            <li key={idx} className = "meeting-item">
                Title: {meeting.title}
                <br></br>
                Partner: {meeting.partner}
                <br></br>
                Time: {meeting.time}
            </li>
            )
            }
        })}
        </ul>
        </div>
        )
    }
}

export default ShowMeetingsForm;