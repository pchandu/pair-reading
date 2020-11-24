import React from 'react';
import BookIndex from '../books/book_index_container'

class Onboarding extends React.Component {
    constructor(props){
        super(props)
        this.handleBook = this.handleBook.bind(this)
        this.handlePreference = this.handlePreference.bind(this)
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

    //updates state to mirror user book preferences
    handleBook(bookId){
        if(this.state.preferred_books.includes(bookId)) {
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

    //updates state to mirror user meeting time preferences
    handlePreference(preference){
        var stateCopy = Object.assign({}, this.state);
        stateCopy.preferred_meeting_times[preference] = !this.state.preferred_meeting_times[preference];
        this.setState(stateCopy);
    }

    //sends PATCH to currentUSER
    //redirects to dashboard page
    handleContinue(e){
        e.preventDefault();
        const updatedUser = Object.assign({}, {user: this.props.currentUser} , this.state);
        this.props.updateUser(updatedUser)
        .then(() => window.location.href = window.location.origin + "/#/dashboard" )
    }

    componentDidMount() {
        this.props.fetchAllBooks();
    }
    
    render(){
        if (!this.props.books) return null
            const {books} = this.props;

        return(
            <div className="onboarding-container">
                <form className="onboarding-form" onSubmit={this.handleContinue}>
                    <h1><i class="far fa-clock"></i>   What time of day works best for you to meet with a partner?</h1>
                    <ul className="preferences-container"> 
                    <a onClick={() => this.handlePreference("M")}>
                        <li className={this.state.preferred_meeting_times["M"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                                <h2 className="preferences-time-of-day">Morning</h2>
                                <p className="preferences-timing">(8am-12pm)</p>
                        </li>
                    </a>
                    <a onClick={() => this.handlePreference("A")}>
                        <li className={this.state.preferred_meeting_times["A"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                                <h2 className="preferences-time-of-day">Afternoon </h2>
                                <p className="preferences-timing">(12pm-4pm)</p>
                        </li>
                    </a>
                    <a onClick={() => this.handlePreference("E")}>
                        <li className={this.state.preferred_meeting_times["E"] === true ? 
                                            `preferences selected-meeting-time`
                                            : `preferences`}>
                                <h2 className="preferences-time-of-day">Evening</h2>
                                <p className="preferences-timing">(5pm-9pm)</p>
                        </li>
                    </a>
                    </ul>
                    <h1><i class="fas fa-book-open"></i>   Please select what books you're interested in reading </h1>
                    <div className="books-container">
                        <ul className="books-ul">
                            {Object.values(books).map((book, i) => {
                                if (i > 4) {
                                    return null;
                                }
                                else {
                                return (
                                    <li className="book-index-item" key={i}>
                                        <a onClick={() => this.handleBook(book._id)}>
                                            <img src={`${book.imagePath}`} 
                                            className={this.state.preferred_books.includes(book._id) ? 
                                                `book-index-cover-photo selected-book-preference`
                                                : `book-index-cover-photo`} />
                                        </a>
                                    </li>
                                )
                                }
                            })}
                        </ul>
                    </div>
                  <input type="submit" value="Continue" className="onboarding-continue-button btn btn-info"></input>
                </form>
            </div>
        )
    }
}

export default Onboarding;