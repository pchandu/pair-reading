import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// const Styles = styled.div`
//  .react-datepicker-wrapper,
//  .react-datepicker__input-container,
//  .react-datepicker__input-container input {
//    width: 175px;
//  }
// `;

class MeetingDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // debugger
        // this.setState({date: e});
        this.props.onDateChange(e)
        // debugger
    }

    render(){
        const date = this.props.date;
        return (
            <div>
                <DatePicker
                    placeholderText="Select Meeting Date" 
                    filterDate={d => {
                        return new Date() < d;
                    }} //disabling users from selecting dates before today
                    showTimeSelect //library feature that allows calendar to have a time selector
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={this.props.date} 
                    value={this.props.date}
                    onChange={this.handleChange} 
                />
            </div>
        )
    }
}

export default MeetingDatePicker;
// export default function MeetingDatePicker() {
//  const [date, setDate] = useState(null); //setting default start date to today

//  return (
//    <DatePicker 
//     placeholderText="Select Meeting Date" 
//     filterDate={d => {
//         return new Date() < d;
//     }} //disabling users from selecting dates before today
//     showTimeSelect //library feature that allows calendar to have a time selector
//     dateFormat="MMMM d, yyyy h:mmaa"
//     selected={date} 
//     onChange={date => setDate(date)} 
//     />
//  );
// }
