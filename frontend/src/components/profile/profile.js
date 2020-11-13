import React from 'react';
import {Link} from 'react-router-dom'
import ProfilePreferences from './preferences_container'

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.props = props;

    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="profile-container">
                <div className="profile-username">
                    {/* {this.props.user.id} */}
                    {this.props.user.username}
                </div>
                <div className="profile-email-and-preferences">
                    <div className="profile-email">
                        {this.props.user.email}
                    </div>
                    < ProfilePreferences />
                </div>
            </div>
        )  
    }
}

export default Profile