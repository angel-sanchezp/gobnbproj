import { Component } from 'react'
import { connect } from 'react-redux'


import { Link, NavLink } from 'react-router-dom'
// import { logo } from '../../assets/svg/airbnb-logo.svg'




class _AppHeader extends Component {

    

    onLogoClicked(){
        window.location.href=`/`
    }
    
    render() {
        return (
            <header className={this.props.class} >

            
                <a aria-current="page" className="logo-link active">
                    <h1 className="logo" onClick={()=>this.onLogoClicked()}>Pl<i className="fab fa-airbnb" aria-hidden="true"></i>
                    Ce</h1></a>

                {
                    this.props.class !== 'home-header' &&
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
                }

                <nav className="main-nav">
                    {/* <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink> */}
                    <NavLink to="/BecomeHost">Become Host</NavLink>

                </nav>

                <section>
                    
                </section>
            </header>
        )
    }
}


function mapStateToProps(state) {
    return {
        class: state.stayModule.classHeader
    }
}



export const AppHeader = connect(mapStateToProps)(_AppHeader)