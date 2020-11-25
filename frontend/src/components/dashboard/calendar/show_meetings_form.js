import React from 'react'


class ShowMeetingsForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
        <ul>
            <h1>Meetings on {this.props.selectedDate}</h1>
        {this.props.meetings.map((meeting, idx) => {
            if(this.props.selectedDate === meeting.date){
            return(
            <li key={idx}>
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
        )
    }
}

export default ShowMeetingsForm;