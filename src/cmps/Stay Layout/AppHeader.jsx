import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { withRouter, NavLink } from 'react-router-dom'

import { Link, NavLink } from 'react-router-dom'
// import { logo } from '../../assets/svg/airbnb-logo.svg'

function _AppHeader() {

    return (
        <header className="app-header" >

            {/* <div className="img-container ">
                <img src={logo} alt="logo" className="logo" />
            </div> */}

            <h1 onClick={() => this.props.history.push('/')}>Airbnb App</h1>

            <nav className="main-nav">
                <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink>
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