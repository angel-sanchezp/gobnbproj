
import React from 'react'
export class HomeFilter extends React.Component {

    state = {
        filterBy: {
            location: '',
            dateIn: '',
            dateOut: '',
            guests: ''

        },
    }

    handleChange = ({ target }) => {
        // console.log(target)
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onSubmitFilter = (ev) => {
        ev.preventDefault()
        // console.log(this.state.filterBy)
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
    }

    cleanForm = () => {
        this.setState({ filterBy: { location: '' , dateIn:'',dateOut:'',guests:'' } })
    }






    render() {
        const { location, dateIn, dateOut, guests } = this.state.filterBy
        return <section className="main-filter-container">
            <form className="max-filter">
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
                <label htmlFor="check-in">
                    <span>Check in</span>
                    <input name="dateIn"
                        id="check-in"
                        autoComplete="off"
                        placeholder="Add dates"
                        onChange={this.handleChange}
                        value={dateIn} />
                </label>
                <label htmlFor="check-out">
                    <span>Check out</span>
                    <input name="dateOut"
                        id="check-out"
                        autoComplete="off"
                        placeholder="Add dates"
                        onChange={this.handleChange}
                        value={dateOut} />
                </label>
                <label className="guests" htmlFor="guests">
                    <div>
                        <span>Guests</span>
                        <input name="guests"
                            id="guests"
                            placeholder="Add guests"
                            onChange={this.handleChange}
                            value={guests} />
                    </div>
                </label>
                <button>
                    <i className="fas fa-search" aria-hidden="true"> </i>
                </button>
            </form>
            {/* <form className="filter-close">
                <span>Hong Kong</span>
                <button>
                    <a href="#/explore">
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </a></button>
            </form> */}
        </section>


    }
}



{/* <label htmlFor="address" classNameName='main-search-label'>
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