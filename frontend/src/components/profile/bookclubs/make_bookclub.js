import React from 'react';
import Modal from 'react-bootstrap/Modal';


class MakeBookClubModal extends React.Component {
    constructor(props){
        super(props);
        this.props = props;

        this.state = {
            show: false
        }
    }


    render(){
        const {user} = this.props;
        console.log(user);
        return(
            <Modal show={this.props.show}>

            </Modal>
        )
    }
}


export default MakeBookClubModal