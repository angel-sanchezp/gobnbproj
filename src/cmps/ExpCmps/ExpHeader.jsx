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
                        <NavLink to="/BecomeHost">Become Host</NavLink>
                    </nav>

                    <form className="form-container">
                        <div className="input container first-container">
                            <label>Location
                                <input type="search" list="destination" placeholder="Where are you going?"></input>
                                <datalist id="destination">
                                    <option value="Tel Aviv"></option>
                                    <option value="Japan"></option>
                                    <option value="Paris"></option>
                                    <option value="New York"></option>
                                </datalist>
                            </label>
                           

                        </div>
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