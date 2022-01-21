import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'
// import { user } from '../../assets/icon/user-icon.png'
class _HomeHeader extends Component {
    onLogoClicked() {
        window.location.href = `/`
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
                            {/* <img src={user} className="avatar" /> */}
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
export const HomeHeader = connect(mapStateToProps)(_HomeHeader)