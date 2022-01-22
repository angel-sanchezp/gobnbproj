import { Component } from 'react'
import { connect } from 'react-redux'
import { stayService } from '../../services/stay.services.js'
import { setFilter, loadStays } from '../../store/stay/stay.actions.js'

class _HeaderFilters extends Component {

    state = {
        filterBy: {
            amenities: [],
            sortBy: ''
        },


    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps.filterBy)
        // console.log('props in home upadte ', this.props.filterBy)
        if (prevProps.filterBy !== this.props.filterBy) {
            this.props.loadStays();
        }
    }

    onSort = (value) => {
        var { filterBy } = this.state
        if (value === 'price') {
            filterBy.sortBy = value
            this.setState({ filterBy });
            this.send()
        } else {
            filterBy.sortBy = value
            this.setState({ filterBy });
            this.send()
        }
    }

    onSetFilter = (value) => {
        var { filterBy } = this.state
        filterBy.amenities.push(value)
        this.setState({ filterBy });
        this.send()
    }



    send = () => {
        this.props.setFilter(this.state.filterBy)
    }

    render() {
        return (
            <div className="filter-sort-line">
                <div className="sort">
                    <button className="filter-btn" onClick={() => this.onSort('price')}>Price</button>
                    <button className="filter-btn" onClick={() => this.onSort('type')}>Type of place</button>
                </div>
                <span>|</span>
                <div className="filters">
                    <button className="filter-btn" onClick={() => this.onSetFilter('Free cancellation')}>Free cancellation</button>
                    <button className="filter-btn" onClick={() => this.onSetFilter('wifi')}>Wifi</button>
                    <button className="filter-btn" onClick={() => this.onSetFilter('kitchen')}>Kitchen</button>
                    <button className="filter-btn" onClick={() => this.onSetFilter('Air conditioning')}>Air conditioning</button>
                    <button className="filter-btn" onClick={() => this.onSetFilter('washer')}>Washer</button>
                    <button className="filter-btn" onClick={() => this.onSetFilter('iron')} >Iron</button>
                    <button className="filter-btn" onClick={() => this.onSetFilter('parking')}>Free parking</button>
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