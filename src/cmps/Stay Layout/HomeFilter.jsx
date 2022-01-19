
import React from 'react'
export class HomeFilter extends React.Component {

    state = {
        filterBy: {
            name: "",
            inStock: true,
            labels: [],
        },
    }






    render() {
        const { filterBy } = this.state;
        return <section className="main-filter-container">
            <form className="max-filter">
                <label>
                    <span>Location</span>
                    <input name="address" autoComplete="off" id="location" type="search" placeholder="Where are you going?"  />
                </label>
                <label htmlFor="check-in">
                    <span>Check in</span>
                    <input id="check-in" autoComplete="off" placeholder="Add dates" />
                </label>
                <label htmlFor="check-out">
                    <span>Check out</span>
                    <input id="check-out" autoComplete="off" placeholder="Add dates" />
                </label>
                <label className="guests" htmlFor="guests">
                    <div>
                        <span>Guests</span>
                        <input id="guests" name="guests" placeholder="Add guests" />
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