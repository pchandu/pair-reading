import React from 'react'
import Modal from 'react-bootstrap/Modal';

class ProfilePreferences extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            preferred_books: this.props.preferred_books,
            preferred_meeting_times: this.props.preferred_meeting_times
        }

        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handlePreference = this.handlePreference.bind(this)
    }

    handleClose(){
        this.setState({show: false});
    }
    
    handleShow(){
        this.setState({show: true});
    }

    handleSave(e){
        e.preventDefault();
        const updatedUser = Object.assign({}, {user: this.props.currentUser} , this.state);
        this.props.updateUser(updatedUser)
        this.handleClose();
    }

    //updates state to mirror user meeting time preferences
    handlePreference(preference){
        var stateCopy = Object.assign({}, this.state);
        // debugger
        this.state.preferred_meeting_times[preference] = !this.state.preferred_meeting_times[preference];
        this.setState(stateCopy);
    }

    render(){
        if (!this.props.books) return <div />
            const {books} = this.props;
        
        return (
        <div className="Preferences-button">
        <button onClick={this.handleShow} className="dashboard-preferences-button">
            Preferences
        </button>

        <Modal show={this.state.show} onHide={this.handleClose} contentClassName="preferences-modal-container"
            className="actual-preferences-modal">
            <form className="dashboard-preferences-form" onSubmit={this.handleContinue}>
                <h1>What time of day works best for you to meet with a partner?</h1>
                <ul className="dashboard-preferences-container"> 
                    <li className={this.state.preferred_meeting_times["M"] === true ? 
                                        `dashboard-preferences selected-meeting-time`
                                        : `dashboard-preferences`}>
                        <a onClick={() => this.handlePreference("M")}>
                            <h2 className="dashboard-preferences-time-of-day">Morning</h2>
                            <p className="dashboard-preferences-timing">(8am-12pm)</p>
                        </a>
                    </li>
                    <li className={this.state.preferred_meeting_times["A"] === true ? 
                                        `dashboard-preferences selected-meeting-time`
                                        : `dashboard-preferences`}>
                        <a onClick={() => this.handlePreference("A")}>
                            <h2 className="dashboard-preferences-time-of-day">Afternoon </h2>
                            <p className="dashboard-preferences-timing">(12pm-4pm)</p>
                        </a>
                    </li>
                    <li className={this.state.preferred_meeting_times["E"] === true ? 
                                        `dashboard-preferences selected-meeting-time`
                                        : `dashboard-preferences`}>
                        <a onClick={() => this.handlePreference("E")}>
                            <h2 className="dashboard-preferences-time-of-day">Evening</h2>
                            <p className="dashboard-preferences-timing">(5pm-9pm)</p>
                        </a>
                    </li>
                </ul>
            </form>

            <div className="dashboard-preferences-modal-footer">
                <button onClick={this.handleClose} className="dashboard-preferences-modal-cancelbtn">
                    Close
                </button>
                <button onClick={this.handleSave} className="dashboard-preferences-modal-savebtn">
                    Save Changes
                </button>
            </div>

        </Modal>
        </div>
        );
    }
}

export default ProfilePreferences;