import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from "react-router-dom"
import moment from 'moment'
import { Logo } from '../shared/logo.jsx'
import { DropdownMenu } from '../shared/DropdownMenu'
import { setFilter} from '../../store/stay/stay.actions.js'

class _GeneralHeader extends Component {

    state = {
        enterInputsMode: null,
        modalIsOpen: false
    }

    // componentDidMount() {
    //     if (!this.props.filterBy.dateIn && !this.props.filterBy.dateOut) {
    //         const urlSearchParams = new URLSearchParams(this.props.location.search)
    //         const dateIn = urlSearchParams.get('dateIn')
    //         const dateOut = urlSearchParams.get('dateOut')
    //         if (dateIn && dateOut) {
    //             this.props.setFilter({ ...this.props.filterBy, dateIn, dateOut});
    //         }
    //     }
    // }



    render() {
        const { enterInputsMode } = this.state
        const { dateIn, dateOut ,location } = this.props.filterBy
        return (
            <div className="general-header">
                <section className='main-nav'>
                    <Logo/>
                    <div className="nav-right">
                        <nav className="main-nav">
                            <div className="nav-links">
                            <NavLink className="nav-txt-header" to="/explore">Explore</NavLink>
                            <NavLink className="nav-txt-header" to="/BecomeHost" >Become Host</NavLink>
                            </div>
                            
                        </nav>
                        <section className="login-container">
                            <div className="user-options">
                                <DropdownMenu/>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        class: state.stayModule.classHeader,
        isMinFilter: state.stayModule.isMinFilter,
        filterBy: state.stayModule.filterBy,
    }
}

const mapDispatchToProps = {
    setFilter
}

export const GeneralHeader = connect(mapStateToProps, mapDispatchToProps)(withRouter(_GeneralHeader))