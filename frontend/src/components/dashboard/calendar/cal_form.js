import React from "react";

//
class CalendarForm extends React.Component {
  render() {
    return (
        <div>
            <p className="cal-form-header">Feel free to fill out a form to remember your next meeting!</p>
            <form >

                <div className="form-group row">
                    <label for="example-text-input" className="col-2 col-form-label cal-form-label">Event Title</label>
                    <div className="col-10">
                        <input className="form-control" type="text" placeholder="What do you want your reading session to be called?" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="example-date-input" className="col-2 col-form-label cal-form-label">Date</label>
                    <div className="col-10">
                        <input className="form-control" type="date"  />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="example-time-input" className="col-2 col-form-label cal-form-label">Start Time</label>
                    <div className="col-10">
                        <input className="form-control" type="time" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="example-time-input" className="col-2 col-form-label cal-form-label">End Time</label>
                    <div className="col-10">
                        <input className="form-control" type="time" />
                    </div>
                </div>
             
            </form>
        </div>
    );
  }
}

export default CalendarForm;
