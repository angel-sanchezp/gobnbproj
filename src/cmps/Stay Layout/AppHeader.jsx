import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { withRouter, NavLink } from 'react-router-dom'

import routes from '../../routes.js'
import { Link, NavLink } from 'react-router-dom'

function _AppHeader () {

        return (
            <header className="app-header" >
                    <h1 onClick={() => this.props.history.push('/')}>Airbnb App</h1>
                
                <nav className="main-nav">
                    <NavLink activeClassName="my-active" to="/explore">Explore</NavLink>
                    <NavLink to="/BecomeHost">Become Host</NavLink>
                  
                </nav>
            </header>
        )
}


function mapStateToProps(state) {
    return {
        stays: state.stayModule.stay
    }
}
const mapDispatchToProps = {
}



export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)