import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ForumCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            bookclub: this.props.bookclubId,
            posts: [],
            show: false,
            title: ""
        }

        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClose(){
        // console.log("does this work at least?")
        // debugger
        this.setState({show: false});
        // debugger
    }
    
    handleShow(){
        // debugger
        this.setState({show: true});
    }

    handleCreate(e){
        e.preventDefault();
        const newForum = Object.assign({}, {title: this.state.title, bookclub: this.state.bookclub})
        // debugger
        this.props.createForum(newForum).then(this.handleClose());
        window.location.reload(false)
    }

    handleChange(e) {
        this.setState({title: e.currentTarget.value});
    }

    render(){
        
        return(
        <>
        <i className="fas fa-pen" onClick={this.handleShow} />
            <Modal show={this.state.show} onHide={this.handleClose} contentClassName="preferences-modal-container"
            className="actual-preferences-modal">
                <form className="dashboard-preferences-form">
                    <h1>What would like your forum to be called?</h1>
                    <input type="text" value={this.state.title} onChange={this.handleChange}/>
                </form>
                    <div className="dashboard-preferences-modal-footer">
                        <button onClick={this.handleClose} className="dashboard-preferences-modal-cancelbtn">
                            Close
                        </button>
                        <button onClick={this.handleCreate} className="dashboard-preferences-modal-savebtn">
                            Create Forum
                        </button>
                    </div>
            </Modal>
        </>
        )
        
    }
}

export default ForumCreate;
