
import React from 'react'
import moment from 'moment';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { Guests } from '../FilterCmps/Guests.jsx'
import { Calendar } from '../FilterCmps/Calendar.jsx'


 class _HomeFilter extends React.Component {

    state ={
        filterBy: (this.props.filterBy || {}),
        isModalShown: false,
        cmp: null
    }

    handleChange = ({ target }) => {
        // console.log('target', target)
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onSubmitFilter = async (ev) => {
        ev.preventDefault()
        // console.log('filter state',this.state.filterBy)
        await  this.props.onSetFilter(this.state.filterBy)
        this.closeModal()
    }

    toggleModal = () => {
        this.setState(prev => ({ ...prev, isModalShown: !prev.isModalShown }))
    }

    onChangeAdults=(adultsNum)=> {
        var {filterBy} = this.state
        filterBy.adults = adultsNum
        this.setState({ filterBy });
    }

    onChangeChildren=(childrenNum)=> {
        var {filterBy} = this.state
        filterBy.children = childrenNum
        this.setState({ filterBy });
    }

    onSetDate=(date)=>{
        var {filterBy} = this.state
        filterBy.dateIn = date[0] && date[0].valueOf()
        filterBy.dateOut = date[1] && date[1].valueOf()
        this.setState({ filterBy });
    }

    openModal = (indicator) => {
        if (indicator === 'guests') {
            // console.log('here guests')
            const { adults = 1, children = 0 } = this.state.filterBy
            this.setState(prev => ({ ...prev, cmp: <Guests adults={adults} children={children} onChangeAdults={this.onChangeAdults} onChangeChildren={this.onChangeChildren} onClose={this.closeModal} /> }))
            this.setState(prev => ({ ...prev, isModalShown: true }))
        } else if(indicator === 'calendar') {
            // console.log('here calendar')
            this.setState(prev => ({ ...prev, cmp: <Calendar onSetDate={this.onSetDate} filterBy={this.props.filterBy} /> }))
            this.setState(prev => ({ ...prev, isModalShown: true }))
        }
    }

    closeModal = () => {
        this.setState(prev => ({ ...prev, isModalShown: false }))
    }

    getInputValue = (date) => {
        if (!date) { return '' }
        if (typeof date === "string") {
            date = parseInt(date);
        }
        return moment(date).format("MMM D")
    }

    get getFormattedGuests() {
        const { children = 0, adults = 1 } = this.state.filterBy
        let text = `${adults} adult${adults > 1 ? 's' : ''}`
        if (children) {
            text += `, ${children} child${children > 1 ? 's' : ''}`
        }
        return text;
    }

    render() {
        const { location = "", dateIn, dateOut, children = 0, adults = 1 } = this.state.filterBy
        // console.log(this.props.isMinFilter)
        const { isModalShown, span, cmp } = this.state
        const formattedDateIn = this.getInputValue(dateIn)
        const formattedDateOut = this.getInputValue(dateOut)

        return <section className="main-filter-container">
            {!this.props.isMinFilter && <section className='secondary-search-bar'>
                <form className="max-filter" onSubmit={this.onSubmitFilter}>
                    <label>
                        <span>Location</span>
                        <input name="location"
                            autoComplete="off"
                            id="location"
                            type="search"
                            placeholder="Where are you going?"
                            onChange={this.handleChange}
                            value={location} />
                    </label>
                    <label htmlFor="check-in" className="label-check-in">
                        <span>Check in</span>
                        <input name="dateIn"
                            id="check-in"
                            autoComplete="off"
                            placeholder="Add dates"
                            onChange={this.handleChange}
                            onClick={() => this.openModal('calendar')}
                            value={formattedDateIn} />
                    </label>
                    <label htmlFor="check-out">
                        <span>Check out</span>
                        <input name="dateOut"
                            id="check-out"
                            autoComplete="off"
                            placeholder="Add dates"
                            onChange={this.handleChange}
                            onClick={() => this.openModal('calendar')}
                            value={formattedDateOut}/>
                            {/* value={dateOut.getDay(),monthNames[dateOut.getMonth()]} /> */}
                    </label>
                    <label className="guests" htmlFor="guests">
                            <span>Guests</span>
                            <input name="guests"
                                id="guests"
                                placeholder={`Add gusts`}
                                onClick={() => this.openModal('guests')}
                                value={this.getFormattedGuests} />
                    </label>
                    <button>
                        <i className="fas fa-search" aria-hidden="true"> </i>
                    </button>
                </form>
            </section>
            }

            {this.props.isMinFilter && <form className="min-filter" onSubmit={this.onSubmitFilter}>
                <span className='min-filter-title' onChange={this.handleChange} name='location' value={location}>Search Pleace</span>
                <button className="min-filter-btn">
                    <i className="fas fa-search" aria-hidden="true"></i>
                </button>
            </form>}

            {isModalShown && <div className="dynamic-modal">
                {cmp}
            </div>}
        </section>
    }
}
function mapStateToProps(state) {
    // console.log('state from home', state)
    return {
        filterBy: state.stayModule.filterBy,

    }
}
const mapDispatchToProps = {
}

export const HomeFilter = connect(mapStateToProps, mapDispatchToProps)(withRouter(_HomeFilter))


