import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class _AppHeader extends React.Component {

    state = {
    }



    render() {
        return (
            <header className="app-header" >
                    <h1 onClick={() => this.props.history.push('/')}>Airbnb App</h1>
                
                <nav className="main-nav">
                    <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink>
                    <NavLink to="/BecomeHost">Become Host</NavLink>
                  
                </nav>
            </header>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)