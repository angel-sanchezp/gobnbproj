import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'
import { SearchModal } from './SearchModel.jsx'

class _ExpHeader extends Component {

    state = {
        enterInputsMode: null
    }

    onLogoClicked() {
        window.location.href = `/`
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
            <section className='exp-header main-nav'>
                <div className='logo'>
                    <a aria-current="page" className="logo-link active">
                        <h1 className="logo" onClick={() => this.onLogoClicked()}>Pl<i className="fab fa-airbnb" aria-hidden="true"></i>
                            Ce</h1></a>
                </div>
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
                    <SearchModal/> 
                )}
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