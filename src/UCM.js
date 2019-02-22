import React, { Component } from 'react'
import SiteNav from './SiteNav';

class UCM extends Component {

    state = {
        gameSize: 500,
        commanders: 1,
        commanderLVL: 1,
        commanderAssignment: ''
    }

    changedGameSize = (e) => {
        console.log('Game size set to', e.target.value)
        let gameSize = Object.assign({}, this.state.gameSize)
        gameSize = e.target.value
        this.setState({ gameSize })
    }

    changedCommanders = (e) => {
        console.log('Number of commanders set to', e.target.value)
        let commanders = Object.assign({}, this.state.commanders)
        commanders = e.target.value
        this.setState({ commanders })
    }

    changedCommanderLVL = (e) => {
        console.log('Commander LVL set to', e.target.value)
        let commanderLVL = Object.assign({}, this.state.commanderLVL)
        commanderLVL = e.target.value
        this.setState({ commanderLVL })
    }

    changedCommanderAssignment = (e) => {
        console.log(e.target.value, 'set as Commander')
        let commanderAssignment = Object.assign({}, this.state.commanderAssignment)
        commanderAssignment = e.target.value
        this.setState({ commanderAssignment })
    }

    consoleLogJSON = (e) => {
        e.preventDefault()
        console.log(this.props.data)
    }

    render = () => {
        return (
            <div>
                <nav>
                    <SiteNav />
                </nav>
                <div id='main'>
                    UCM Starter Army
                    <form>
                        Game Size (Pts):<input onChange={this.changedGameSize} value={this.state.gameSize}/>
                        Commanders: <input onChange={this.changedCommanders} value={this.state.commanders}/>
                        Commander LVL: <input onChange={this.changedCommanderLVL} value={this.state.commanderLVL} />
                        Assign Commander(s): <input onChange={this.changedCommanderAssignment} value={this.state.commanderAssignment} />
                        <button onClick={this.consoleLogJSON}>Console Log JSON</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UCM