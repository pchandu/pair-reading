import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Onboarding from '../onboarding/onboarding';

class ProfilePreferences extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            // preferred_books:[],
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
        <button onClick={this.handleShow} className="preferences-button">
            Preferences
        </button>

        <Modal show={this.state.show} onHide={this.handleClose} contentClassName="preferences-modal-container">
            <Modal.Header closeButton>
                <h1>Hello! Please select your new preferences.</h1>
            </Modal.Header>
            
            <form className="onboarding-form" onSubmit={this.handleContinue}>
                    <h1>What time of day works best for you to meet with a partner?</h1>
                    <ul className="preferences-container"> 
                        <li className={this.state.preferred_meeting_times["M"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                            <a onClick={() => this.handlePreference("M")}>
                                <h2 className="preferences-time-of-day">Morning</h2>
                                <p className="preferences-timing">(8am-12pm)</p>
                            </a>
                        </li>
                        <li className={this.state.preferred_meeting_times["A"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                            <a onClick={() => this.handlePreference("A")}>
                                <h2 className="preferences-time-of-day">Afternoon </h2>
                                <p className="preferences-timing">(12pm-4pm)</p>
                            </a>
                        </li>
                        <li className={this.state.preferred_meeting_times["E"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                            <a onClick={() => this.handlePreference("E")}>
                                <h2 className="preferences-time-of-day">Evening</h2>
                                <p className="preferences-timing">(5pm-9pm)</p>
                            </a>
                        </li>
                    </ul>
                  {/* <input type="submit" value="Continue" className="onboarding-continue-button"></input> */}
                </form>

            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>


        </Modal>
        </div>
        );
    }
}

export default ProfilePreferences;