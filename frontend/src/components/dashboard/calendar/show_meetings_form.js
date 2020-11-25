import React from 'react'


class ShowMeetingsForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
        <ul>
        {this.props.meetings.map((meeting, idx) => {
            if(this.props.selectedDate === meeting.date){
            return(
            <li key={idx}>
                Partner: {meeting.partner}
                <br></br>
                Title: {meeting.title}
            </li>
            )
            }
        })}
        </ul>
        )
    }
}

export default ShowMeetingsForm;