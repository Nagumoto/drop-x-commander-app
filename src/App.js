import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import UCM from './UCM'
import Home from './Home'

class App extends Component {

  state = {
    data: require('./DropXData.json'),
    faction: '',
    gameSize: '',
    gameSizePts: 1200,
    commanders: 1,
    commanderLVL: [1],
    commanderAssignment: [''],
    bgs: {
      total: [],
      hq: [],
      armour: [],
      infantry: [],
      special: []
    }
  }

  changedBattlegroups = (e) => {
    console.log()
    let bgs = Object.assign({}, this.state.bgs)
    bgs = e.target.value
    this.setState({ bgs }, console.log(this.state.bgs))
  }

  changedGameSize = (e) => {
    console.log('Game size (Pts) set to', e.target.value)
    let gameSizePts = Object.assign({}, this.state.gameSizePts)
    gameSizePts = e.target.value
    this.setState({ gameSizePts })
    this.setState({gameSize: this.gameSizeCategory()})
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

  changedHQ = (e) => {
    // let hq = Object.assign({}, this.state.bgs.hq)
    // let hq = e.target.value
    this.setState({
      bgs: {
        hq: e.target.value,
        armour: this.state.bgs.armour,
        infantry: this.state.bgs.infantry,
        special: this.state.bgs.special
      }
    }, this.clogBgs)
  }

  changedArmour = (e) => {
    // let armour = Object.assign({}, this.state.bgs.armour)
    // armour = e.target.value

    let num = parseInt(e.target.value, 10)

    this.setState({
      bgs: {
        hq: this.state.bgs.hq,
        armour: Array(num),
        infantry: this.state.bgs.infantry,
        special: this.state.bgs.special
      }
    }, this.clogBgs)
  }

  changedInfantry = (e) => {
    // let infantry = Object.assign({}, this.state.bgs.infantry)
    // infantry = e.target.value
    this.setState({
      bgs: {
        hq: this.state.bgs.hq,
        armour: this.state.bgs.armour,
        infantry: e.target.value,
        special: this.state.bgs.special
      }
    }, this.clogBgs)
  }

  changedSpecial = (e) => {
    // let special = Object.assign({}, this.state.bgs.special)
    // special = e.target.value
    this.setState({
      bgs: {
        hq: this.state.bgs.hq,
        armour: this.state.bgs.armour,
        infantry: this.state.bgs.infantry,
        special: e.target.value
      }
    }, this.clogBgs)
  }

  range = (num, start, end) => {
    return ((num - start) * (num - end) <= 0)
  }

  gameSizeCategory = () => {
    if (this.range(this.state.gameSizePts, 500, 999)) {
      return 'Skirmish'
    } else if (this.range(this.state.gameSizePts, 1000, 1999)) {
      return 'Clash'
    } else if (this.range(this.state.gameSizePts, 2000, 3000)) {
      return 'Battle'
    } else {
      return 'Abnormal'
    }
  }

  clogBgs = () => {
    console.log(this.state.bgs)
  }

  renderHome = () => {
    return (
      <Home />
    )
  }

  renderUCM = () => {
    return (
      <UCM state={this.state} gameSizeCategory={this.gameSizeCategory} specialBGHandler={this.changedSpecial} infantryBGHandler={this.changedInfantry} armourBGHandler={this.changedArmour} hqBGHandler={this.changedHQ} comsHandler={this.changedCommanders} comAssignHandler={this.changedCommanderAssignment} comLVLHandler={this.changedCommanderLVL} gameSizeHandler={this.changedGameSize} bgsHandler={this.changedBattlegroups} />
    )
  }

  renderScourge = () => {
    return (
      <UCM />
    )
  }

  render = () => {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={this.renderHome} />
          <Route path="/UCM" component={this.renderUCM} />
        </Switch>
      </Router>

    )
  }
}

export default App
