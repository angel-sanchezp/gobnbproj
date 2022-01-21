import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { loadStays, changeHeaderClass } from '../store/stay/stay.actions.js'
import { utilService } from '../services/utils.service'

const HEADER_CLASS = 'explore-header'

class _Explore extends Component {
    state = {
        ...this.filtersFromUrl,
    }

    componentDidMount() {
        this.props.changeHeaderClass(HEADER_CLASS)
        if (_.isEmpty(this.props.stays)) {
            this.props.loadStays(this.filtersFromUrl)
        }
    }

    get filtersFromUrl() {
        const urlSearchParams = new URLSearchParams(this.props.location.search)
        return {
            location: urlSearchParams.get('location'),
            guests: urlSearchParams.get('guests'),
            dateIn: urlSearchParams.get('dateIn'),
            dateOut: urlSearchParams.get('dateOut')
        }
    }
  

    
// function randomDate(start, end, period) {
//     if()
//     var date = new Date(+start + Math.random() * (end - start));
//     var hour = startHour + Math.random() * (endHour - startHour) | 0;
//     date.setHours(hour);
//     return date;
// }

    getNightsPeriod(start, end) {
        const timeDiff = new Date(end).getTime() - new Date(start).getTime();
        var nights = (timeDiff / (1000 * 3600 * 24))
        return nights;
    }


    randomDate(nights) {
        const DAY_MS = 86400000;
        const MAX_LENGTH = 14
        var nights = nights || utilService.getRandomIntInclusive(1,7)
        var end = new Date(Date.now() + (DAY_MS * (MAX_LENGTH - nights)))
        var start = new Date(Date.now())
    
        console.log({ start, end, nights });
    
        // Get random date between 2 dates
        var periodStart = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        
        var periodEnd = new Date(periodStart.getTime() + (DAY_MS * nights))
        
        console.log({ start: periodStart, end: periodEnd, nights });
    
 }

    onStayClicked(stayId){
        window.location.href=`/details/${stayId}`;
    }

    // const onSelectStay = (stayId) => {
    //     console.log(` ${stay.vendor} to Cart`)
    //     addToCart(car)
    //     showSuccessMsg('Added to Cart')
    // }
    render() {
        const { stays } = this.props
        const { location } = this.state

        return (
            <section>
                <div className="filter-sort-line">
                    <div className="sort">
                        <button className="filter-btn">Price</button>
                        <button className="filter-btn">Type of place</button>
                    </div><span>|</span>
                    <div className="filters">
                        <button className="filter-btn">Free cancellation</button>
                        <button className="filter-btn">Wifi</button>
                        <button className="filter-btn">Kitchen</button>
                        <button className="filter-btn">Hot tub</button>
                    </div>
                </div>
                <section className="explore-page">
                        {location &&
                        <div className="txt-explore-page">
                            <div className="small-txt-exp-page">{stays.length} stays in {location}</div>
                            <div className="small-txt-exp-page">Review COVID-19 travel restrictions before you book</div>
                        </div>
                        }
                        <ul className="list-container">

                        {stays.map(stay =>
                        
                            <li className="explore-card-stay card" key={stay._id} onClick={()=>this.onStayClicked(stay._id)}>
                                <img className="explore-card-image" alt="cat" src={stay.imgUrls[0]} />
                                <div className="stay-details">
                                    <div className="line1">
                                        <div className="black-bold-txt">{stay.name.length > 30? stay.name.slice(0, 30).concat('...') : stay.name }</div>
                                        <div className="black-solid-txt">${stay.price.toLocaleString()} / night</div>
                                    </div>
                                    <div className="line2">
                                        <div className="gray-txt">{utilService.getRandomIntInclusive(1000, 3000)} kilometers away</div>
                                        <div className="gray-small-txt">Jan 21 - 28</div>
                                    </div>   
                                </div>
                            </li>
                        )}
                    

                        </ul>       
                </section>
            </section>
        )

    }
}

function mapStateToProps(state) {
    console.log('state from explore',state)
    return {
        stays: state.stayModule.stays,
        filterBy: state.stayModule.filterBy,
        class: state.stayModule.classHeader
    }
}
const mapDispatchToProps = {
    loadStays,
    changeHeaderClass
}


export const Explore = connect(mapStateToProps, mapDispatchToProps)(_Explore)