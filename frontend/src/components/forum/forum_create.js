import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ForumCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }

        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
    }

    handleClose(){
        this.setState({show: false});
    }
    
    handleShow(){
        this.setState({show: true});
    }

    handleCreate(){

        this.handleClose();
    }

    render(){
        
        return(
        
        <i className="fas fa-pen" onClick={this.handleShow}>
            <Modal show={this.state.show} onHide={this.handleClose} contentClassName="preferences-modal-container"
            className="actual-preferences-modal">
                <form className="dashboard-preferences-form" onSubmit={this.handleCreate}>
                    <h1>What would like your forum to be called?</h1>

                    <div className="dashboard-preferences-modal-footer">
                        <button onClick={this.handleClose} className="dashboard-preferences-modal-cancelbtn">
                            Close
                        </button>
                        <button onClick={this.handleCreate} className="dashboard-preferences-modal-savebtn">
                            Create Forum
                        </button>
                    </div>
                </form>

        </Modal>

        </i>
        
        )
        
    }
}

export default ForumCreate;