import React, { Component } from 'react'

class Battlegroup extends Component {

    renderUnits = () => {
        if (this.props.units) {
            this.props.units.reduce(
                (unit) => {

                }
            )
        }
    }

    render = () => {
        return (
            <div>
                {this.props.type} Battlegroup {this.props.number}

            </div>
        )
    }
}

export default Battlegroup