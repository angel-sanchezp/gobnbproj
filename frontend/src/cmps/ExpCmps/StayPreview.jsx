
import { Component } from 'react'
import { utilService } from '../../services/utils.service.js'
import { ReactComponent as Star } from '../../assets/svg/star.svg'
import { withRouter } from "react-router-dom"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


class _StayPreview extends Component {
    onStayClicked(stayId) {
        this.props.history.push(`/details/${stayId}`)
    }

    render() {
        const { stay } = this.props
        const autoplay=false
        return (
            <li className="explore-card-stay card" key={stay._id}>
                <div className="slide-container">
                    <Slide autoplay={autoplay}>
                        {stay.imgUrls.map((img, index) => (
                            <div className="each-slide" key={index}>
                                {/* <div style={{ 'backgroundImage': `url(${img})` }}> */}
                                <img className="explore-card-image" alt="cat" src={img} onClick={() => this.onStayClicked(stay._id)}/>
                                   
                                {/* </div> */}
                            </div>
                        ))}
                    </Slide>
                </div>



                <div className="stay-details">
                    <div className="line1">
                        <div className="star"><Star /></div>
                        <div className="rank">{stay.rank}</div>
                        <div className="review-count"> ({stay.reviews.length})</div>
                    </div>
                    <div className="line2">
                        <div className="black-solid-txt">{stay.location.address.length > 35 ? stay.location.address.slice(0, 35).concat('...') : stay.location.address}</div>

                        {/* <div className="black-solid-txt">{stay.location.city}</div> */}
                    </div>
                    <div className="line3">
                        <div className="black-solid-txt">{stay.name.length > 35 ? stay.name.slice(0, 35).concat('...') : stay.name}</div>
                    </div>
                    <div className="line4">
                        <div className="black-bold-txt">${stay.price.toLocaleString()}</div>
                        <div className="black-solid-txt"> / night</div>

                        {/* <div className="gray-txt">{utilService.getRandomIntInclusive(1000, 3000)} kilometers away</div>
                    {dateOut && dateIn && <div className="gray-small-txt">{this.formatDates(dateIn, dateOut)}</div>}
                    {!dateIn && !dateOut && <div className="gray-small-txt">Jan 21 -28</div>} { /** TODO : Fix the random */}
                    </div>
                </div>
            </li>

        )

    }

}




// const mapDispatchToProps = {
//     loadStays,
//     changeHeaderClass
// }

export const StayPreview = (withRouter(_StayPreview))