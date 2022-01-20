import { Component } from 'react'
import { connect } from 'react-redux'


import { Link, NavLink } from 'react-router-dom'
// import { logo } from '../../assets/svg/airbnb-logo.svg'




class _AppHeader extends Component {

    

    onLogoClicked(){
        window.location.href=`/`
    }
    
    render() {
        console.log('render',this.props.class)
        return (
            <header className={this.props.class} >

            
                <a aria-current="page" className="logo-link active">
                    <h1 className="logo" onClick={()=>this.onLogoClicked()}>Pl<i className="fab fa-airbnb" aria-hidden="true"></i>
                    Ce</h1></a>

                <nav className="main-nav">
                    <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink>
                    <NavLink to="/BecomeHost">Become Host</NavLink>

                </nav>

                <section>
                    
                </section>
            </header>
        )
    }
}


function mapStateToProps(state) {
    console.log('state from home' , state)
    return {
        class: state.stayModule.classHeader
    }
}



export const AppHeader = connect(mapStateToProps)(_AppHeader)