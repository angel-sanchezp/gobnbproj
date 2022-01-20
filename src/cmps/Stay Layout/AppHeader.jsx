import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { withRouter, NavLink } from 'react-router-dom'

import { Link, NavLink } from 'react-router-dom'
// import { logo } from '../../assets/svg/airbnb-logo.svg'

function _AppHeader() {

    return (
        <header className="app-header" >

          
            <a aria-current="page" className="logo-link active">
                <h1 className="logo">Pl<i className="fab fa-airbnb" aria-hidden="true"></i>
                Ce</h1></a>

            <nav className="main-nav">
                <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink>
                {/* <NavLink to="/stayDetails">Stay Details</NavLink> */}
                <NavLink to="/BecomeHost">Become Host</NavLink>

            </nav>

            <section>
                
            </section>
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