import React, { Component } from 'react'

class Battlegroup extends Component {

    render = () => {
        return (
            <div>
                {this.props.type} Battlegroup {this.props.number}
            </div>
        )
    }
}

export default Battlegroup