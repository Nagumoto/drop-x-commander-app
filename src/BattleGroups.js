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
            if (this.props.state.bgs.hq > 0) {
                return (
                    <Battlegroup type='Infantry' />
                )
            }
        } else if (type === 'ARM') {
            if (this.props.state.bgs.armour > 0) {
                return (
                    <Battlegroup type='Infantry' />
                )
            }
        } else if (type === 'INF') {
            if (this.props.state.bgs.infantry > 0) {
                return (
                    <Battlegroup type='Infantry' />
                )
            }
        } else if (type === 'SP') {
            if (this.props.state.bgs.special > 0) {
                return (
                    <Battlegroup type='Infantry' />
                )
            }
        } else {
            
        }
    }

    render = () => {
        if (this.props.gameSize === 'Skirmish') {
            return (
                <div id="battlegroups">
                    <section id="HQ Battlegroup">
                        HQ Battlegroups:
                        <select onChange={this.changedHQ}>
                            <option>0</option>
                            <option>1</option>
                        </select>
                    </section>
                    <section id="Armour Battlegroup">
                        Armour Battlegroups:
                        <select onChange={this.changedArmour}>
                            <option>1</option>
                        </select>
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
                    </section>
                    <section id="Armour Battlegroup">
                        Armour Battlegroups:
                        <select onChange={this.changedArmour}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </section>
                    <section id="Infantry Battlegroup">
                        Infantry Battlegroups:
                        <select onChange={this.changedInfantry}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </section>
                    <section id="Special Battlegroup">
                        Special Battlegroups:
                        <select onChange={this.changedSpecial}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
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
                    </section>
                    <section id="Armour Battlegroup">
                        Armour Battlegroups:
                        <select onChange={this.changedArmour}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </section>
                    <section id="Infantry Battlegroup">
                        Infantry Battlegroups:
                        <select onChange={this.changedInfantry}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </section>
                    <section id="Special Battlegroup">
                        Special Battlegroups:
                        <select onChange={this.changedSpecial}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </section>
                </div>
            )
        } else {
            return (
                <div id="battlegroups">
                    <section id="HQ Battlegroup">
                        HQ Battlegroups:
                    <input onChange={this.changedHQ} />
                    </section>
                    <section id="Armour Battlegroup">
                        Armour Battlegroups:
                    <input onChange={this.changedArmour} />
                    </section>
                    <section id="Infantry Battlegroup">
                        Infantry Battlegroups:
                    <input onChange={this.changedInfantry} />
                    </section>
                    <section id="Special Battlegroup">
                        Special Battlegroups:
                    <input onChange={this.changedSpecial} />
                    </section>
                </div>
            )
        }
    }
}

export default BattleGroups