import React from 'react'
import { Link } from 'react-router-dom';

class ForumIndex extends React.Component {

    constructor(props) {
        super(props)
        // debugger
    }

    componentDidMount() {
        this.props.clearForumsFilter();
        this.props.fetchFilteredForums();
    }

    render() {
        const { forums } = this.props;
        debugger
        return (
            <div className="forum-index-container">
                <ul className="forum-index-forums">
                    {Object.values(forums).map((forum, i) => (
                        <Link to={`/forums/${forum._id}`}>
                        <li key={i}>{forum.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ForumIndex