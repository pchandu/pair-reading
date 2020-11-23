import React from 'react';
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
                
                <ProfilePreferences email={this.props.user.email}/>
            </div>
        )  
    }
}

export default Profile