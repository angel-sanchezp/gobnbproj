
import React from 'react'
import moment from 'moment';
import { Guests } from '../FilterCmps/Guests.jsx'
import { Calendar } from '../FilterCmps/Calendar.jsx'


export class HomeFilter extends React.Component {

    state ={
        filterBy: {
            location: '',
            dateIn: '',
            dateOut: '',
            adults: '',
            children:''

        },
        isModalShown: false,
        cmp: null
    }

    handleChange = ({ target }) => {
        // console.log('target', target)
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onSubmitFilter = (ev) => {
        ev.preventDefault()
        // console.log('filter state',this.state.filterBy)
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
        this.closeModal()
    }

    cleanForm = () => {
        this.setState({ filterBy: { location: '', dateIn: '', dateOut: '' } })
    }

    toggleModal = () => {
        this.setState(prev => ({ ...prev, isModalShown: !prev.isModalShown }))
    }

    onChangeAdults=(adultsNum)=> {
        var {filterBy} =this.state
        filterBy.adults =adultsNum
        this.setState({ filterBy });
  
    }
    onChangeChildren=(childrenNum)=> {
        var {filterBy} =this.state
        filterBy.children =childrenNum
        this.setState({ filterBy });
    }

    onSetDate=(date)=>{
        var {filterBy} =this.state
        filterBy.dateIn =date[0]
        filterBy.dateOut=date[1]
        console.log('dateIn',  filterBy.dateIn)
        console.log('dateOn'  ,filterBy.dateIn)
        this.setState({ filterBy });


    }

    OpenModal = (indicator) => {
        if (indicator === 'guests') {
            // console.log('here guests')
            this.setState(prev => ({ ...prev, cmp: <Guests onChangeAdults={this.onChangeAdults} onChangeChildren={this.onChangeChildren} /> }))
            this.setState(prev => ({ ...prev, isModalShown: true }))

        } else {
            // console.log('here calendar')
            this.setState(prev => ({ ...prev, cmp: <Calendar onSetDate={this.onSetDate} /> }))
            this.setState(prev => ({ ...prev, isModalShown: true }))


        }

    }

    closeModal = () => {
        this.setState(prev => ({ ...prev, isModalShown: false }))
    }

    getInputValue = (date) => {
        if (!date) { return '' }
        return moment(date).format("MMM d")
    }
    


    render() {
        const { location, dateIn, dateOut, guests } = this.state.filterBy
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
                            onClick={this.toggleModal}
                            value={location} />
                    </label>
                    <label htmlFor="check-in">
                        <span>Check in</span>
                        <input name="dateIn"
                            id="check-in"
                            autoComplete="off"
                            placeholder="Add dates"
                            onChange={this.handleChange}
                            onClick={() => this.OpenModal('calendar')}

                            value={formattedDateIn} />
                    </label>
                    <label htmlFor="check-out">
                        <span>Check out</span>
                        <input name="dateOut"
                            id="check-out"
                            autoComplete="off"
                            placeholder="Add dates"
                            onChange={this.handleChange}
                            onClick={() => this.OpenModal('calendar')}
                            value={formattedDateOut}/>
                            {/* value={dateOut.getDay(),monthNames[dateOut.getMonth()]} /> */}
                    </label>
                    <label className="guests" htmlFor="guests">
                        <div>
                            <span>Guests</span>
                            <input name="guests"
                                id="guests"
                                placeholder={`Add gusts`}
                                onChange={this.handleChange}
                                onClick={() => this.OpenModal('guests')}
                                value={guests} />
                        </div>
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


