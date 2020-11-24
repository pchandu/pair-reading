import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MeetingDatePicker() {
 const [date, setDate] = useState(new Date()); //setting default start date to today

 return (
   <DatePicker 
    placeholderText="Select Date" 
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
