import React from 'react';
import BookIndex from '../books/book_index_container'

class Onboarding extends React.Component {
    constructor(props){
        super(props)
        this.handleBook = this.handleBook.bind(this)
        this.handleContinue = this.handleContinue.bind(this)
        this.state = {
            preferred_books:[],
            preferred_meeting_times:{
                M: false, // morning 
                A: false, // afternoon
                E: false  // evening
            }
        }
    }

    //updates state to mirror user preferences
    handleBook(bookId){
        //logic to unselect if its already in the preferred_books
        debugger
        if(this.state.preferred_books.includes(bookId)) {
            // debugger
            const index = this.state.preferred_books.indexOf(bookId);
            var stateCopy = Object.assign({}, this.state);
            let newBooks = [];
            this.state.preferred_books.forEach((book) => {
                if(book !== bookId){
                    newBooks.push(book)
                }
            })

            stateCopy.preferred_books = newBooks;
            this.setState(stateCopy);
        } else {
            this.setState({preferred_books: this.state.preferred_books.concat(bookId)});
        }
    }

    handlePreference(preference){
        var stateCopy = Object.assign({}, this.state);
        stateCopy.preferred_meeting_times[preference] = !this.state.preferred_meeting_times[preference];
        // debugger
        this.setState(stateCopy);
        // if(this.state.preferred_meeting_times.preference) {
        //     this.state.preferred_meeting_times.remove(preference);
        // } else {
        //     this.setState({preferred_meeting_times: this.state.preferred_meeting_times.concat(preference)})
        // }
    }

    handleContinue(e){
        // debugger
        e.preventDefault();
        const updatedUser = Object.assign({}, {user: this.props.currentUser} , this.state);
        // debugger
        this.props.updateUser(updatedUser)
        // debugger
            // .then(() => 
        this.props.history.push("/dashboard");
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
                <form className="onboarding-form" onSubmit={this.handleContinue}>
                    <h1>What time of day works best for you to meet with a partner?</h1>
                    <ul className="preferences-container"> 
                        <li className={this.state.preferred_meeting_times["M"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                            <a onClick={() => this.handlePreference("M")}>
                                {/* <input type="checkbox" id="preference-morning" name="preference-morning" className="checkbox"/> */}
                                <h2 className="preferences-time-of-day">Morning</h2>
                                <p className="preferences-timing">(8am-12pm)</p>
                            </a>
                        </li>
                        <li className={this.state.preferred_meeting_times["A"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                            <a onClick={() => this.handlePreference("A")}>
                                {/* <input type="checkbox" id="preference-afternoon" name="preference-afternoon" className="checkbox"/> */}
                                <h2 className="preferences-time-of-day">Afternoon </h2>
                                <p className="preferences-timing">(12pm-4pm)</p>
                            </a>
                        </li>
                        <li className={this.state.preferred_meeting_times["E"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                            <a onClick={() => this.handlePreference("E")}>
                                {/* <input type="checkbox" id="preference-evening" name="preference-evening" className="checkbox"/> */}
                                <h2 className="preferences-time-of-day">Evening</h2>
                                <p className="preferences-timing">(5pm-9pm)</p>
                            </a>
                        </li>
                    </ul>
                    <h1>Please select what books you're interested in reading </h1>
                    <div className="books-container">
                        <ul className="books-ul">
                            {Object.values(books).map((book, i) => {
                                return (
                                    <li className="book-index-item" key={i}>
                                        <a onClick={() => this.handleBook(book._id)}>
                                            <img src={`${book.imagePath}`} 
                                            className={this.state.preferred_books.includes(book._id) ? 
                                                `book-index-cover-photo selected-book-preference`
                                                : `book-index-cover-photo`} />
                                            {/* <input type="checkbox" id={`${book.title}`} name={`${book.title}`} className="book-checkbox"/> */}
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