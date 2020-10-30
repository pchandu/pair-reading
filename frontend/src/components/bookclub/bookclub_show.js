import React from 'react'


class BookClubShow extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchBookClub(this.props.bookclubId);
    }

    render() {
        debugger
        const { bookclub } = this.props;
        return (
            <div className="bookclub-show-container">
                <div>{bookclub ? bookclub.title:""}</div>
            </div>
        )
    }
}

export default BookClubShow