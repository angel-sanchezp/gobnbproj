import { StayReserve } from './StayReserve.jsx';
import { StayAmenities } from './StayAmenities.jsx';
import { StayDates } from './StayDates.jsx';
// import { filter } from 'lodash';
import { ReactComponent as Home } from '../../assets/svg/home.svg'
import { ReactComponent as Clean } from '../../assets/svg/clean.svg'
import { ReactComponent as Location } from '../../assets/svg/location.svg'
import { ReactComponent as Check } from '../../assets/svg/check.svg'


export function StayInfo({stay , filterBy}){
    console.log(filterBy)
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
                <div className="general-benefits">
                    <div>
                        <div className="benefit">
                            <div className="b-icon"><Home/></div>
                            <div className="b-details">
                                <h4>Entire home</h4>
                                <p>You’ll have the place to yourself.</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <div className="b-icon"><Clean/></div>
                            <div className="b-details">
                                <h4>Enhanced Clean</h4>
                                <p>This Host committed to Airbnb's 5-step enhanced cleaning process.</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <div className="b-icon"><Location/></div>
                            <div className="b-details">
                                <h4>Great location</h4>
                                <p>95% of recent guests gave the location a 5-star rating.</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <div className="b-icon"><Check/></div>
                            <div className="b-details">
                                <h4>Great check-in experience</h4>
                                <p>100% of recent guests gave the check-in process a 5-star rating.</p>
                            </div>
                        </div>
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
                <section className="details-calendar">
                    <StayDates filterBy={filterBy}/>
                </section>
            </section>
            <section className="reserve">
                <StayReserve  filterBy={filterBy} stay = {stay}/>

            </section>
            
        </section>
    )
}