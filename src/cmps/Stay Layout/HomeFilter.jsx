
import React from 'react'
export class HomeFilter extends React.Component {

    state = {
        filterBy: {
            location: '',
            dateIn: '',
            dateOut: '',
            guests: ''

        },
        isModalShown: false,
        num: 0,
        span: 0
    }

    handleChange = ({ target }) => {
        console.log('target', target)
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onSubmitFilter = (ev) => {
        ev.preventDefault()
        // console.log('filter state',this.state.filterBy)
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
    }

    cleanForm = () => {
        this.setState({ filterBy: { location: '', dateIn: '', dateOut: '' } })
    }

    toggleModal = () => {
        this.setState(prev => ({ ...prev, isModalShown: !prev.isModalShown }))
    }

    onChangeNum(indicator) {
        this.setState(prevState => ({ ...prevState, span: prevState.span + indicator, filterBy: { ...prevState.filterBy.guests, adults: prevState.span + indicator } }))

    }
    onChangeValue(indicator) {
        this.setState(prevState => ({ ...prevState, num: prevState.span + indicator, filterBy: { ...prevState.filterBy.guests, children: prevState.num + indicator } }))

    }






    render() {
        const { location, dateIn, dateOut, guests } = this.state.filterBy
        console.log(this.props.isMinFilter)
        const { isModalShown, span, num } = this.state

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
                            onClick={this.toggleModal}

                            value={dateIn} />
                    </label>
                    <label htmlFor="check-out">
                        <span>Check out</span>
                        <input name="dateOut"
                            id="check-out"
                            autoComplete="off"
                            placeholder="Add dates"
                            onChange={this.handleChange}
                            onClick={this.toggleModal}

                            value={dateOut} />
                    </label>
                    <label className="guests" htmlFor="guests">
                        <div>
                            <span>Guests</span>
                            <input name="guests"
                                id="guests"
                                placeholder={`${span} guests`}
                                onChange={this.handleChange}
                                onClick={this.toggleModal}
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
                <span className='min-filter-title'>Search Pleace</span>
                <button className="min-filter-btn">
                    <i className="fas fa-search" aria-hidden="true"></i> 
              </button>
              </form>}


            {isModalShown && <div className="dynamic-modal">
                <div className="dynamic-modal-child filter-guest-modal">
                    <div className="modal-label"><div><span>Adults</span><span>Ages 13 or above</span></div>
                        <div><button type="button" onClick={() => this.onChangeNum(-1)}>-</button><span>{span}</span><button type="button" onClick={() => this.onChangeNum(1)}>+</button></div></div>
                    <div className="modal-label"><div><span>Kids</span><span>Ages 0–12</span></div><div>
                        <button type="button" onClick={() => this.onChangeValue(-1)}>-</button><span>{num}</span><button type="button" onClick={() => this.onChangeValue(1)}>+</button>
                    </div></div>
                </div>
            </div>}


        </section>


    }
}

// style={top: 149px; {left: 915px}}



{/* <label htmlFor="address" classNameNameName='main-search-label'>
    <span>Location</span>
<input  classNameName="input-search-toy"  type="search" name="address" onChange={this.handleChange} placeholder="Where are you going?" value={filterBy.address} />
</label>
<label htmlFor="checkin" classNameName='main-search-label'>
<span>Check in</span>
<input  className="input-search-toy"  name="checkin" onChange={this.handleChange} placeholder="add dates" value={filterBy.checkin} />
</label>
<label htmlFor="checkout" className='main-search-label'>
<span>Check out</span>
<input  className="input-search-toy"   name="checkout" onChange={this.handleChange} placeholder="add dates" value={filterBy.checkout} />
</label>
<label htmlFor="guest" className='main-search-label'>
<span>Guests</span>
<input  className="input-search-toy" name="guests" onChange={this.handleChange} placeholder="add guests" value={filterBy.guests} />
</label> */}