import React, { Component } from 'react'
import SiteNav from './SiteNav';

class Home extends Component {

    render = () => {
        return (
            <div>
                <nav>
                    <SiteNav />
                </nav>
                An introduction
            </div>
        )
    }
}

export default Home