import React from 'react';
import BookIndex from '../books/book_index_container'

class Onboarding extends React.Component {
    constructor(props){
        super(props)
        this.handleBook = this.handleBook.bind(this)
        this.handleContinue = this.handleContinue.bind(this)
        this.state = {
            preferred_books:[],
            preferred_meeting_times:[]
        }
    }

    //updates state to mirror user preferences
    handleBook(bookId){
        this.setState({preferred_books: this.state.preferred_books.concat(bookId)})
    }

    // handlePreference(preference){
    //     this.setState({preferred_meeting_times: this.state.preferred_books.concat(preference)})
    // }

    handleContinue(){
        const updatedUser = Object.assign({}, this.props.currentUser, this.state);
        this.props.updatedUser(updatedUser)
            .then(() => this.props.history.push("/dashboard"));
        //this.props.updateUserPreferences(updatedUser)
        //fix current User
        //sends PATCH to currentUSER
        //redirects to dashboard page
    }

    componentDidMount() {
        this.props.fetchAllBooks();
    }

    
    render(){
        if (!this.props.books) return <div />
            const {books} = this.props;
    
        return(
            <div className="onboarding-container">
                <form className="onboarding-form">
                    <h1>What time of day works best for you to meet with a partner?</h1>
                    <ul className="preferences-container"> 
                        <li className="preferences">
                            <input type="checkbox" id="preference-morning" name="preference-morning" className="checkbox"/>
                            <p className="preferences-time-of-day">Morning</p>
                            <p className="preferences-timing">(8am-12pm)</p>
                        </li>
                        <li className="preferences">
                            <input type="checkbox" id="preference-afternoon" name="preference-afternoon" className="checkbox"/>
                            <p className="preferences-time-of-day">Afternoon </p>
                            <p className="preferences-timing">(12pm-4pm)</p>
                        </li>
                        <li className="preferences">
                            <input type="checkbox" id="preference-evening" name="preference-evening" className="checkbox"/>
                            <p className="preferences-time-of-day">Evening</p>
                            <p className="preferences-timing">(5pm-9pm)</p>
                        </li>
                    </ul>
                <div className="books-container">
                    <ul className="books-ul">
                        {Object.values(books).map((book, i) => {
                            return (
                                <li className="book-index-item" key={i}>
                                    <a onClick={this.handleBook(book._id)}>
                                        <img src={`${book.imagePath}`} className="book-index-cover-photo" />
                                        <input type="checkbox" id={`${book.title}`} name={`${book.title}`} className="book-checkbox"/>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                  <input type="submit" value="Continue" className="onboarding-continue-button"></input>
                </form>
            </div>
        )
    }
}

export default Onboarding