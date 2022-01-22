import { StayReserve } from './StayReserve.jsx';
import { StayAmenities } from './StayAmenities.jsx';
import { StayDates } from './StayDates.jsx';

export function StayInfo({stay}){
    // console.log(stay)
    return (
        <section className="stay-info-container">
            <section className="summary-info">
                <div className="top-info">
                    <div className="top-details">
                        <div>
                            <h2>{stay.type} Hosted by {stay.host.fullname}</h2>
                        </div>
                        <div className="place-info">
                            <span>{stay.capacity} guests ·  </span>
                            <span>{stay.bedrooms} bedrooms · </span>
                            <span>{stay.beds} beds · </span>
                            <span>{stay.bathrooms} baths </span>
                        </div>
                    </div>
                    <div className="host-img">
                        <img src={stay.host.imgUrl} className="host-img"alt="" />
                    </div>
                </div>
                <div className="summary">
                <p >
                    {stay.summery}
                </p>
                </div>
                <section className="sleep-general">
                    <div className="sleep-title">
                        <h2>Where you'll sleep</h2>
                    </div>
                    <div className="stay-sleep">
                        <img src={stay.sleep} className="sleep"alt="" />
                    </div>
                </section>
                <StayAmenities stay = {stay}/>
                <section className="selected-dates">
                    <StayDates/>
                </section>
            </section>
            <section className="reserve">
                <StayReserve stay = {stay}/>

            </section>
            
        </section>
    )
}