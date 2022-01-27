
import { Component } from 'react'
// import { utilService } from '../../services/utils.service.js'
// import { ReactComponent as Star } from '../../assets/svg/star.svg'
import { withRouter } from "react-router-dom"
import { Trips } from '../../pages/Trips'

class _TripPreview extends Component {

    onTripClicked(tripId) {
        this.props.history.push(`/details/${tripId}`)
    }

    render(){
        const { trip } = this.props
        // console.log('trip' , trip)
        return(
            <li className="trip-card" key={trip._id} onClick={() => this.onTripClicked(trip.stay_id)}>
                <img className="trip-card-image" alt="cat" src={trip.stayDetails.imgUrls[0]} />
                <div className="trip-details">
                    <h2 className="bold-txt">{trip.stayDetails.stay_name}</h2>
                    <div className="dates">
                        <div className="check-in-box">
                            <div className="bold">Check-in</div>
                            <div>Fri,Sep 29,2022</div>
                            <div>11:00 AM</div>
                        </div>
                        <div className="check-out-box">
                            <div className="bold">Checkout</div>
                            <div>Fri,Sep 31,2022</div>
                            <div>15:00 AM</div>

                        </div>
                    </div>
                    <div className="tripcard-bottom">
                        <div className="status-host">
                            <div className="txt">Order status: {trip.status}</div>
                            <div className="txt">Hosted by {trip.hostDetails.fullname}</div>
                        </div>
                        <button className="btn">Cancel order</button>
                    </div>
                </div>
            </li>
        )
    }
 }

export const TripPreview = (withRouter(_TripPreview))