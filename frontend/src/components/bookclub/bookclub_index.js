import React from 'react'


class BookClubIndex extends React.Component {

    constructor(props) {
        super(props)
        debugger
    }

    componentDidMount() {
        this.props.fetchAllBookClubs();
    }

    render() {
        if (!this.props.bookclubs) return <div />
        const { bookclubs } = this.props;

        return (
            <div className="browse-container">
                {Object.values(bookclubs).map((forum, i) => {
                    return (
                        <div className="bookclub-index-container">
                            <p>{forum.title}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BookClubIndex