import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'
import { withRouter } from "react-router-dom"
import { ReactComponent as UserAvatar } from '../../assets/svg/user-avatar.svg'

// import { user } from '../../assets/icon/user-icon.png'

import { setFilter } from '../../store/stay/stay.actions.js'

class _HomeHeader extends Component {
    onLogoClicked() {
        window.location.href = `/`
    }

    onSetFilter = (filterBy) => {
        console.log('home filterby ', filterBy)
        this.props.setFilter(filterBy);
        const { location, dateIn, dateOut, guests = 1 } = filterBy 

        var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];

        let checkIn = (dateIn.getDay())  
        let checkOut =(dateOut.getDay())  
        let month=(monthNames[dateOut.getMonth()])


        setTimeout(() => {
            this.props.history.push(`/explore?location=${location}&dateIn=${checkIn}&dateOut=${checkOut}&month=${month}&guests=${guests}`)
        }, 1000)
    }


    render() {
        console.log('render', this.props.class)
        return (
                <section className='main-nav'>
                    <div className='logo'>
                        <a aria-current="page" className="logo-link active">
                            <h1 className="logo" onClick={() => this.onLogoClicked()}>Pl<i className="fab fa-airbnb" aria-hidden="true"></i>
                                Ce</h1></a>
                    </div>
                <div className='secondary-search-bar'>
                    <HomeFilter onSetFilter={this.onSetFilter} isMinFilter={this.props.isMinFilter}/>
                </div>
                <section className="right-nav">
                    <div className="host-options">
                        <NavLink className="become" activeClassName="my-active" exact to="/explore">Explore</NavLink>
                        <NavLink className="become" to="/BecomeHost">Become Host</NavLink>
                    </div>
                    <section className="login-container">
                        <div className="user-options">
                            <div className="burger">☰</div>
                            <div className="user-avatar"><UserAvatar/></div>
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}
function mapStateToProps(state) {
    // console.log('state from home', state)
    return {
        class: state.stayModule.classHeader,
        isMinFilter: state.stayModule.isMinFilter
    }
}
const mapDispatchToProps = {
    setFilter,

}
export const HomeHeader = connect(mapStateToProps, mapDispatchToProps)(withRouter(_HomeHeader))