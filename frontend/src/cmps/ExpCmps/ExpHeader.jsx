import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from "react-router-dom"
import moment from 'moment'
import { SearchModal } from './SearchModel.jsx'
import { Logo } from '../shared/logo.jsx'
import { DropdownMenu } from '../shared/DropdownMenu'
import { setFilter} from '../../store/stay/stay.actions.js'

class _ExpHeader extends Component {

    state = {
        enterInputsMode: null,
        modalIsOpen: false
    }

    componentDidMount() {
        if (!this.props.filterBy.dateIn && !this.props.filterBy.dateOut) {
            const urlSearchParams = new URLSearchParams(this.props.location.search)
            const dateIn = urlSearchParams.get('dateIn')
            const dateOut = urlSearchParams.get('dateOut')
            if (dateIn && dateOut) {
                this.props.setFilter({ ...this.props.filterBy, dateIn, dateOut});
            }
        }
    }

    closeModal = () => {
        this.setState(prevState=>({ 
            ...prevState, 
            enterInputsMode: null
        }))
    }

    openModal = () => {
        console.log('openModal')
        this.setState(prevState=>({ 
            ...prevState, 
            enterInputsMode: true
        }))
    }

    formatDates = (dateIn, dateOut) => {
        if(!!dateIn && !!dateOut){
            return `${moment(parseInt(dateIn)).format("MMM D")} - ${moment(parseInt(dateOut)).format("MMM D")}`
        }

        return "Add dates"
    }


    get getFormattedGuests() {
        const { children = 0, adults = 1 } = this.props.filterBy
        let text = `${adults} adult${adults > 1 ? 's' : ''}`
        if (children) {
            text += `, ${children} child${children > 1 ? 's' : ''}`
        }
        return text;
    }

    render() {
        const { enterInputsMode } = this.state
        const { dateIn, dateOut ,location } = this.props.filterBy
        return (
            <div className="explore-header">
                <section className='main-nav'>
                    <Logo/>
                    <div className="nav-right">
                        <nav className="main-nav">
                            {/* <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink> */}
                            <NavLink to="/BecomeHost" className="nav-txt-header">Become Host</NavLink>
                        </nav>
                        <section className="login-container">
                            <div className="user-options">
                                <DropdownMenu/>
                            </div>
                        </section>
                    </div>
                    {!enterInputsMode ? (
                        <form className="exp-mini-form">
                            <div className="input first-container" onClick={this.openModal}>
                                <input value={location} type="text" placeholder="Add location" readOnly></input>
                            </div>
                            <div className="input second-container" onClick={this.openModal}>
                                <input type="text" placeholder="Add dates" value={this.formatDates(dateIn, dateOut)} readOnly></input>
                            </div>
                            <div className="input third-container" onClick={this.openModal}>
                                <input value={this.getFormattedGuests} type="text" placeholder="Add guests" readOnly></input>
                            </div>
                            
                            <button className="mini-form-btn">
                                <i className="fas fa-search" aria-hidden="true"></i> 
                            </button>
                        </form>
                    ) : (
                        <SearchModal onCloseModal={this.closeModal} onSetFilter={this.onSetFilter} isMinFilter={this.props.isMinFilter}/> 
                    )}
                </section>
                {/* <div className="user-modal hidden">
                <LoginModal/>
                </div> */}
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

export const ExpHeader = connect(mapStateToProps, mapDispatchToProps)(withRouter(_ExpHeader))