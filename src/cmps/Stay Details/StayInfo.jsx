import { StayReserve } from './StayReserve.jsx';
import { StayAmenities } from './StayAmenities.jsx';

export function StayInfo({stay}){
    // console.log(stay)
    return (
        <section className="stay-info-container">
            <section className="summary-info">
                <div className="top-info">
                    <div>
                    <h2>I will be the info</h2>
                    </div>
                    <div className="place-info">
                        <span>{stay.capacity} guests  </span>
                        <span>{stay.bedrooms} bedrooms </span>
                        <span>{stay.beds} beds </span>
                        <span>{stay.bathrooms} baths </span>
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
                <StayAmenities stay = {stay}/>
            </section>
            <section className="reserve">
                <StayReserve/>

            </section>
            
        </section>
    )
}