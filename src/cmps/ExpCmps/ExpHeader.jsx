import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import moment from 'moment'
import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'
import { SearchModal } from './SearchModel.jsx'
import { Logo } from '../shared/logo.jsx'



class _ExpHeader extends Component {

    state = {
        enterInputsMode: null
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

    // formatDates = (dateIn, dateOut) => {
       
    //     // if(dateIn !== null && dateOut!== null){
    //         return `${moment(dateIn).format("MMM D")} - ${moment(dateOut).format("MMM D")}`
    //     // }else{
    //     //     return 'Jan 24 - Jan 25'
    //     // }
            
        
        
        
    // }

    
    // onSearch = (inputs) => {
    //     notesService.updateNote(note).then(()=>{
    //         this.closeModal()
    //         this.loadNotes()
    //     })
    // }

    render() {
        const { enterInputsMode } = this.state
        const { dateIn, dateOut ,location }=this.props.filterBy
        // console.log(dateIn,dateOut)
        return (
            <div className="explore-header">
                <section className='main-nav'>
                    <Logo/>
                    {/* <nav>
                        {/* <div className="reserve-nav">
                            <div className="reserve-nav-details">
                                <div className="nav-price">
                                    <span>stay price</span><span>/night</span>
                                </div>
                                <div className="nav-rating">
                                    <span>rate</span><span>reviews</span>
                                </div>
                            </div>
                            <div className="reserve-btn">
                                <form action="book/stay">
                                    <input type="text" />
                                    <button>
                                        <span></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav> */} 
                    <nav className="main-nav">
                        {/* <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink> */}
                        <NavLink to="/BecomeHost" className="nav-txt-header">Become Host</NavLink>
                    </nav>
                    {!enterInputsMode ? (
                        <form className="exp-mini-form">
                            <div className="input first-container" onClick={this.openModal}>
                                    <input value={location} type="text" placeholder="Add location" readOnly></input>
                            </div>
                            <div className="input second-container" onClick={this.openModal}>
                                <input type="text" placeholder="Add dates" readOnly></input>
                            </div>
                            <div className="input third-container" onClick={this.openModal}>
                                <input type="text" placeholder="Add guests" readOnly></input>
                            </div>
                            
                            <button className="mini-form-btn">
                                <i className="fas fa-search" aria-hidden="true"></i> 
                            </button>
                        </form>
                    ) : (
                        <SearchModal onCloseModal={this.closeModal} onSetFilter={this.onSetFilter} isMinFilter={this.props.isMinFilter}/> 
                    )}
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


export const ExpHeader = connect(mapStateToProps)(_ExpHeader)