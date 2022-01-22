import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
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

    
    // onSearch = (inputs) => {
    //     notesService.updateNote(note).then(()=>{
    //         this.closeModal()
    //         this.loadNotes()
    //     })
    // }

    render() {
        const { enterInputsMode } = this.state
        return (
            <div className="explore-header">
                <section className='main-nav'>
                    <Logo/>
                    <nav className="main-nav">
                        {/* <NavLink activeClassName="my-active" exact to="/explore">Explore</NavLink> */}
                        <NavLink to="/BecomeHost" className="nav-txt-header">Become Host</NavLink>
                    </nav>
                    {!enterInputsMode ? (
                        <form className="exp-mini-form">
                            <div className="input first-container" onClick={this.openModal}>
                                    <input type="text" placeholder="Add location"></input>
                            </div>
                            <div className="input second-container" onClick={this.openModal}>
                                <input type="text" placeholder="Add dates"></input>
                            </div>
                            <div className="input third-container" onClick={this.openModal}>
                                <input type="text" placeholder="Add guests"></input>
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
        isMinFilter: state.stayModule.isMinFilter
    }
}


export const ExpHeader = connect(mapStateToProps)(_ExpHeader)