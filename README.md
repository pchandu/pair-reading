# PairReading
How often do you pick up a book and never end up finishing it? Too often in our case. Pair Reading is a web application built with the MERN stack to help people find the accountability they need to finish their books by finding users reading partners on books they're interested in. 

Check out our live demo here: https://pair-reading.herokuapp.com/#/
# Design Process
**gif of wireframes to real product**

# Onboarding
The PairReading journey begins upon signup, where users are taken to the onboarding page to select their preferences: the time of day that works best to meet with their pair and the books they're interested in pairing with. //talk about how this helps us "get to know the user" and help match them with other users.
**screenshot of onboarding component**

The preferences are stylized buttons that change color to indicate whether they are selected or not. The logic implemented for selection is a conditional that checks the status of the onboarding component's state which updates global state for the user upon clicking the "continue" button.
```js
 //updates state to mirror user's selected book preferences
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

    //updates state to mirror user's selected meeting time preferences
    handlePreference(preference){
        var stateCopy = Object.assign({}, this.state);
        stateCopy.preferred_meeting_times[preference] = !this.state.preferred_meeting_times[preference];
        this.setState(stateCopy);
    }
```
Once a user finishes onboarding, the user lands on the dashboard, where the main functionality of the app exists. 
# Dashboard
**screenshot of dashboard with user profile in a red box, calendar in purple, and bookclubs in pink**
The dashboard is broken into 2 modules: user profile (red outline on the left) and external interaction: scheduling meetings on the calendar (purple) and visiting bookclubs (pink outline on the bottom right). 
## User Profile 
Users have two primary functionalities: 
1. managing invites. Users can be invited to join bookclubs or accept a meeting with a match.
2. connecting with matches. A list of matches (an algorithm that finds other users who share book preferences) is populated in a dropdown style list. 
## Calendar
**gif of different calendar views**
## Bookclubs
Bookclubs are micro-communities within PairReading where users interested in a specific set of books can have discussions to gain deeper insights from one another. **bookclub show screenshot**
### Post Activity & Forums
Post activity highlights recent posts the user has made. Clicking on posts redirects the user to the forum in which the post was made. 
//CRUD
**screenshot of Forums page**
# Developers: 
Alex Archibeque, Kat Chan, Praneeth Chandu, Kevin Su
