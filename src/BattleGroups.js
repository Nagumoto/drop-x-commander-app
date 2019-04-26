import React, { Component } from 'react'
import Battlegroup from './Battlegroup'

class BattleGroups extends Component {

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



    renderBattlegroup = (type) => {

        if (type === 'HQ') {
            if (this.props.state.bgs.HQ) {
                return this.props.state.bgs.HQ.map(
                    (HQ, index) => (
                    <Battlegroup type='HQ' units={HQ.units} number={index+1} data={this.props.state.data} />
                    )
                )
            }
        } else if (type === 'ARM') {
            if (this.props.state.bgs.ARMOUR) {
                return this.props.state.bgs.ARMOUR.map(
                    (armour, index) => (
                    <Battlegroup type='Armour' units={armour.units} number={index+1} data={this.props.state.data} />
                    )
                )
            }
        } else if (type === 'INF') {
            if (this.props.state.bgs.INFANTRY) {
                return this.props.state.bgs.INFANTRY.map(
                    (infantry, index) => (
                    <Battlegroup type='Infantry' units={infantry.units} number={index+1} data={this.props.state.data} />
                    )
                )
            }
        } else if (type === 'SP') {
            if (this.props.state.bgs.SPECIAL) {
                return this.props.state.bgs.SPECIAL.map(
                    (special, index) => (
                    <Battlegroup type='Special' units={special.units} number={index+1} data={this.props.state.data} />
                    )
                )
            }
        } else {
            
        }
    }

    clog = () => console.log(this.props.bgs.total[3])

    render = () => {
        if (this.props.gameSize === 'Skirmish') {
            return (
                <div id="battlegroups">
                    <section id="HQ Battlegroup">
                        HQ Battlegroups:
                        <select value={this.props.state.hq} onChange={this.changedHQ}>
                            <option>0</option>
                            <option>1</option>
                        </select>
                        {this.renderBattlegroup('HQ')}
                    </section>
                    <section id="Armour Battlegroup">
                        Armour Battlegroups:
                        <select onChange={this.changedArmour}>
                            <option>1</option>
                        </select>
                        {this.renderBattlegroup('ARM')}
                    </section>
                    <section id="Infantry Battlegroup">
                        Infantry Battlegroups:
                        <select onChange={this.changedInfantry}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {this.renderBattlegroup('INF')}
                    </section>
                    <section id="Special Battlegroup">
                        Special Battlegroups:
                        <select onChange={this.changedSpecial}>
                            <option>0</option>
                            <option>1</option>
                        </select>
                        {this.renderBattlegroup('SP')}
                    </section>
                </div>
            )
        } else if (this.props.gameSize === 'Clash') {
            return (
                <div id="battlegroups">
                    <section id="HQ Battlegroup">
                        HQ Battlegroups:
                        <select onChange={this.changedHQ}>
                            <option>1</option>
                        </select>
                        {this.renderBattlegroup('HQ')}
                    </section>
                    <section id="Armour Battlegroup">
                        Armour Battlegroups:
                        <select onChange={this.changedArmour}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {this.renderBattlegroup('ARM')}
                    </section>
                    <section id="Infantry Battlegroup">
                        Infantry Battlegroups:
                        <select onChange={this.changedInfantry}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {this.renderBattlegroup('INF')}
                    </section>
                    <section id="Special Battlegroup">
                        Special Battlegroups:
                        <select onChange={this.changedSpecial}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {this.renderBattlegroup('SP')}
                    </section>
                </div>
            )
        } else if (this.props.gameSize === 'Battle') {
            return (
                <div id="battlegroups">
                    <section id="HQ Battlegroup">
                        HQ Battlegroups:
                        <select onChange={this.changedHQ}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {this.renderBattlegroup('HQ')}
                    </section>
                    <section id="Armour Battlegroup">
                        Armour Battlegroups:
                        <select onChange={this.changedArmour}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {this.renderBattlegroup('ARM')}
                    </section>
                    <section id="Infantry Battlegroup">
                        Infantry Battlegroups:
                        <select onChange={this.changedInfantry}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {this.renderBattlegroup('INF')}
                    </section>
                    <section id="Special Battlegroup">
                        Special Battlegroups:
                        <select onChange={this.changedSpecial}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        {this.renderBattlegroup('SP')}
                    </section>
                </div>
            )
        } else {
            return (
                <div id="battlegroups">
                    <section id="HQ Battlegroup">
                        HQ Battlegroups:
                    <input onChange={this.changedHQ} />
                        {this.renderBattlegroup('HQ')}
                    </section>
                    <section id="Armour Battlegroup">
                        Armour Battlegroups:
                    <input onChange={this.changedArmour} />
                        {this.renderBattlegroup('ARM')}
                    </section>
                    <section id="Infantry Battlegroup">
                        Infantry Battlegroups:
                    <input onChange={this.changedInfantry} />
                        {this.renderBattlegroup('INF')}
                    </section>
                    <section id="Special Battlegroup">
                        Special Battlegroups:
                    <input onChange={this.changedSpecial} />
                        {this.renderBattlegroup('SP')}
                    </section>
                </div>
            )
        }
    }
}

export default BattleGroups