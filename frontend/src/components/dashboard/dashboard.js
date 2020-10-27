import React from 'react'

class DashBoard extends React.Component {

    render(){
        return(
            <div className="container outer-dashboard-container">
                Outer Top
                <div className="row dashboard-content-container">
                    <div className="col left-side-dashboard-container">
                        Left Side
                    </div>

                    <div className="col middle-side-dashboard-container">
                        Middle Side
                    </div>

                    <div className="col right-side-dashboard-container">
                        Right Side
                    </div>
                </div>
                Outer Bottom
            </div>
        )
    }
}

export default DashBoard;