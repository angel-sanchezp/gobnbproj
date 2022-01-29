import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'
import { ReactComponent as UserAvatar } from '../../assets/svg/user-avatar.svg'
import { DropdownMenu } from '../shared/DropdownMenu.jsx'
import { LoginModal } from '../shared/LoginModal'



import point from "../../assets/img/point.png";


import { setFilter } from '../../store/stay/stay.actions.js'

class _HomeHeader extends Component {
    onLogoClicked() {
        this.props.history.push('/')
    }

    onSetFilter = async (filterBy) => {
        // console.log('home filterby ', filterBy)

        await this.props.setFilter(filterBy);
        const { location, dateIn, dateOut, adults = 1, children = 0 } = filterBy
        let params = ""
        if (location) {
            params += `&location=${location}`
        }
        if (dateIn) {
            params += `&dateIn=${dateIn.valueOf()}`
        }
        if (dateOut) {
            params += `&dateOut=${dateOut.valueOf()}`
        }
        if (children) {
            params += `&children=${children}`
        }
        if (adults) {
            params += `&adults=${adults}`
        }
        setTimeout(() => {
            this.props.history.push(`/explore?${params}`)
        }, 1000)
    }

    render() {
        console.log('render red dot ', this.props.isRedDot)
        return (
            <section className='main-nav'>
                <div className='logo'>
                    <a aria-current="page" className="logo-link active">
                        <h1 className="logo" onClick={() => this.onLogoClicked()}>Go<i className="fab fa-airbnb" aria-hidden="true"></i>
                            bnb</h1></a>
                </div>
                <div className='secondary-search-bar'>
                    <HomeFilter onSetFilter={this.onSetFilter} isMinFilter={this.props.isMinFilter} />
                </div>
                <section className="right-nav">
                    <div className="host-options">
                        <NavLink className="become" activeClassName="my-active" exact to="/explore">Explore</NavLink>
                        <NavLink className="become" to="/BecomeHost">Become Host</NavLink>
                    </div>
                    <section className="login-container">
                        <div className="user-options">
                            <DropdownMenu />
                        </div>
                    </section>
                    <div className="user-modal hidden">
                        <LoginModal />
                    </div>
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