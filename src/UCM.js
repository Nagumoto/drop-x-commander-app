import React, { Component } from 'react'
import SiteNav from './SiteNav';
import BattleGroups from './BattleGroups';

class UCM extends Component {

    changedBattlegroups = (e) => {
        this.props.bgsHandler(e)
    }

    changedGameSize = (e) => {
        this.props.gameSizeHandler(e)
        this.props.gameSizeCategory()
    }

    changedCommanders = (e) => {
        this.props.comsHandler(e)
    }

    changedCommanderLVL = (e) => {
        this.props.comLVLHandler(e)
    }

    changedCommanderAssignment = (e) => {
        this.props.comAssignHandler(e)
    }

    changedHQ = (e) => {
        this.props.hqBGHandler(e)
    }

    changedArmour = (e) => {
        this.props.armourBGHandler(e)
    }

    changedInfantry = (e) => {
        this.props.infantryBGHandler(e)
    }

    changedSpecial = (e) => {
        this.props.specialBGHandler(e)
    }

    consoleLogJSON = (e) => {
        e.preventDefault()
        console.log(this.props.state.data.Dropzone.UCM.Command.map((val) => val.Name))
    }

    renderCommanderAssignment = () => {
        if (this.props.state.commanders !== 0) {
            return (
                <span>Assign Commander(s):
                    <select onChange={this.changedCommanderAssignment} value={this.props.state.commanderAssignment}>
                        <option>Kodiak</option>
                        <option>Phoenix</option>
                    </select>
                </span>
            )
        }
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
                        Game Size {this.props.gameSizeCategory()} (Pts):<input onChange={this.changedGameSize} value={this.props.state.gameSizePts} />
                        Commanders: <input onChange={this.changedCommanders} value={this.props.state.commanders} />
                        Commander LVL: <input onChange={this.changedCommanderLVL} value={this.props.state.commanderLVL} />
                        {this.renderCommanderAssignment()}
                        <BattleGroups state={this.props.state} specialBGHandler={this.changedSpecial} infantryBGHandler={this.changedInfantry} armourBGHandler={this.changedArmour} hqBGHandler={this.changedHQ} changeHandler={this.changedBattlegroups} gameSize={this.props.gameSizeCategory} bgs={this.props.state.bgs} />
                        <button onClick={this.consoleLogJSON}>Console Log</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default UCM