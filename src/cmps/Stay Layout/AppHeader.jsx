import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'
import { HomeHeader } from '../HomeCmps/HomeHeader.jsx';
import { ExpHeader } from '../ExpCmps/ExpHeader.jsx';


// import { user } from '../../assets/icon/user-icon.png'




class _AppHeader extends Component {


    onLogoClicked() {
        window.location.href = `/`
    }

    render() {
        return (
            <header className={this.props.class} >
                {
                    this.props.class !== 'explore-header' && this.props.class !== 'details-header' &&
                        <HomeHeader />

                }

                

                {
                    this.props.class ==='explore-header' &&
                        <ExpHeader />
                }

                {
                    this.props.class === 'details-header' &&
                        <ExpHeader />
                }



            </header >
        )
    }
}


function mapStateToProps(state) {
    return {
        class: state.stayModule.classHeader,
        isMinFilter: state.stayModule.isMinFilter
    }
}



export const AppHeader = connect(mapStateToProps)(_AppHeader)


