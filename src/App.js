import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import UCM from './UCM'
import Home from './home'

class App extends Component {

  state = {
    data: require('./DropXData.json')
  }

  renderHome = () => {
    return (
      <Home />
    )
  }

  renderUCM = () => {
    return (
      <UCM data={this.state.data}/>
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
          <Route exact path="/" component={this.renderUCM} />
          <Route path="/UCM" component={this.renderUCM} />
        </Switch>
      </Router>

    )
  }
}

export default App
