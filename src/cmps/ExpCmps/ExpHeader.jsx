import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'



class _ExpHeader extends Component {

    onLogoClicked() {
        window.location.href = `/`
    }

    render() {
        return (
            <section className='main-nav'>
                    <div className='logo'>
                        <a aria-current="page" className="logo-link active">
                            <h1 className="logo" onClick={() => this.onLogoClicked()}>Pl<i className="fab fa-airbnb" aria-hidden="true"></i>
                                Ce</h1></a>
                    </div>
                    <nav className="main-nav">
                        {/* <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink> */}
                        <NavLink to="/BecomeHost" className="nav-txt-header">Become Host</NavLink>
                    </nav>

                    <form className="exp-mini-form">
                        <div className="input first-container">
                                <input type="text" placeholder="Add location"></input>
                        </div>
                        <div className="input second-container">
                            <input type="text" placeholder="Add dates"></input>
                        </div>
                        <div className="input third-container">
                            <input type="text" placeholder="Add guests"></input>
                        </div>
                        
                        <button className="mini-form-btn">
                            <i className="fas fa-search" aria-hidden="true"></i> 
                        </button>
                    </form>
            </section>
        )
    }

}

function mapStateToProps(state) {
    return {
        class: state.stayModule.classHeader,
        isMinFilter: state.stayModule.isMinFilter
    }
}



export const ExpHeader = connect(mapStateToProps)(_ExpHeader)