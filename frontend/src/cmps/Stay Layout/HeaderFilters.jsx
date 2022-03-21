import { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import { stayService } from '../../services/stay.services.js'
import { setFilter, loadStays } from '../../store/stay/stay.actions.js'

const FILTERS = [
    'Free cancellation',
    'Wifi',
    'Kitchen',
    'Air conditioning',
    'Washer',
    'Iron',
    'Parking'
]

class _HeaderFilters extends Component {
    state = {
        minPrice: '',
        maxPrice: '',
        showPriceModal: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.filterBy !== this.props.filterBy) {
            this.props.loadStays();
        }
    }

    toggleFilter = (value) => {
        var { filterBy: { amenities = [] } } = this.props
        const filterIdx = amenities.findIndex(a => a === value)
        let newAmenities = amenities;
        if (filterIdx === -1) {
            newAmenities.push(value)
        } else {
            newAmenities = amenities.splice(filterIdx, 1)
        }
        this.props.setFilter({ ...this.props.filterBy, amenities })
    }

    togglePriceModal = () => {
        this.setState((prevState) => ({
            showPriceModal: !prevState.showPriceModal
        }))
        // console.log("Toggle price modal")
    }

    filterPrice = (ev) => {
        ev.preventDefault();
        const { minPrice, maxPrice } = this.state;
        const newFilters = {}
        if (minPrice) newFilters.minPrice = minPrice;
        if (maxPrice) newFilters.maxPrice = maxPrice;
        
        this.props.setFilter({
            ...this.props.filterBy,
            ...newFilters
        })
    }

    handlePriceChange = (ev, type) => {
        this.setState({
            [type]: (ev.target.value)
                
        })
    }

    render() {
        const { showPriceModal, minPrice, maxPrice } = this.state;
        console.log('filterby.amenities',this.props.filterBy.amenities);

        return (
            <div className="filter-sort-line">
                <div className="sort">
                    { showPriceModal && (
                        <form onSubmit={this.filterPrice}>
                            <input type="number" placeholder="Minimum price" value={minPrice} onChange={(ev) => this.handlePriceChange(ev, "minPrice")}/>
                            <input type="number" placeholder="Maximum price" value={maxPrice} onChange={(ev) => this.handlePriceChange(ev, "maxPrice")}/>
                            <button type="submit">Submit</button>
                        </form>
                    )}
                    <button className="filter-btn" onClick={this.togglePriceModal}>Price</button>
                    <button className="filter-btn" onClick={() => this.onSort('type')}>Type of place</button>
                </div>
                <span>|</span>
                <div className="filters">
                    {
                        FILTERS.map((filter, idx) => (
                            <button key={idx} className={cn('filter-btn', { 'is-active': this.props.filterBy.amenities.includes(filter) })}
                                onClick={() => this.toggleFilter(filter)}>
                                {filter}
                            </button>
                        ))
                    }
                </div>
            </div>
        );

    }
}
function mapStateToProps(state) {
    return {
        filterBy: state.stayModule.filterBy,
    }
}

const mapDispatchToProps = {
    setFilter,
    loadStays

}

export const HeaderFilters = connect(mapStateToProps, mapDispatchToProps)(_HeaderFilters)