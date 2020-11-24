import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Styles = styled.div`
 .react-datepicker-wrapper,
 .react-datepicker__input-container,
 .react-datepicker__input-container input {
   width: 175px;
 }
`;

export default function MeetingDatePicker() {
 const [date, setDate] = useState(null); //setting default start date to today

 return (
   <DatePicker 
    placeholderText="Select Meeting Date" 
    filterDate={d => {
        return new Date() < d;
    }} //disabling users from selecting dates before today
    showTimeSelect //library feature that allows calendar to have a time selector
    dateFormat="MMMM d, yyyy h:mmaa"
    selected={date} 
    onChange={date => setDate(date)} 
    />
 );
}
