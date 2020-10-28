import React from 'react'


class ForumIndex extends React.Component {

    constructor(props) {
        super(props)
        debugger
    }

    componentDidMount() {
        this.props.fetchAllForums();
    }

    render() {
        // if (!this.props.forums) return null
        if (!this.props.forums) return <div />
        const { forums } = this.props;

        return (
            <div className="browse-container">
                {Object.values(forums).map((forum, i) => {
                    return (
                        <div className="forum-index-container">
                            <p>{forum.title}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ForumIndex