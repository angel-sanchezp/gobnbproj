import { connect } from 'react-redux'
import { setFilter } from '../../store/stay/stay.actions.js'

const _HeaderFilters = ({ setFilter }) => {

    return (
        <div className="filter-sort-line">
            <div className="sort">
                <button className="filter-btn">Price</button>
                <button className="filter-btn">Type of place</button>
            </div>
            <span>|</span>
            <div className="filters">
                <button className="filter-btn">Free cancellation</button>
                <button className="filter-btn">Wifi</button>
                <button className="filter-btn">Kitchen</button>
                <button className="filter-btn">Air conditioning</button>
                <button className="filter-btn">Washer</button>
                <button className="filter-btn">Iron</button>
                <button className="filter-btn">Free parking</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    setFilter
}

export const HeaderFilters = connect(null, mapDispatchToProps)(_HeaderFilters)