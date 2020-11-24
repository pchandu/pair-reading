import React from 'react'

class HistoricalFiction extends React.Component {

    render(){
        const {books} = this.props;
        return(
            <div>
                <h1>Historical books</h1>
                <ul>
                {books.map(book =>{
                    return(
                    <li>
                        <img src={book.imagePath} />
                    </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default HistoricalFiction;