import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class SiteNav extends Component {
    render = () => {
        return (
            <h1>
                <NavLink activeClassName='active' exact to='/'>Dropzone</NavLink>
                <NavLink activeClassName='active' exact to='/UCM'>UCM</NavLink>
                <NavLink activeClassName='active' exact to='/Scourge'>Scourge</NavLink>
                <NavLink activeClassName='active' exact to='/PHR'>PHR</NavLink>
                <NavLink activeClassName='active' exact to='/Shaltari'>Shaltari</NavLink>
                <NavLink activeClassName='active' exact to='/Resistance'>Resistance</NavLink>
            </h1>
        )
    }
}

export default SiteNav