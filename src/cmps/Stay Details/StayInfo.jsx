import { StayReserve } from './StayReserve.jsx';

export function StayInfo({stay}){
    // console.log(stay)
    return (
        <section className="stay-info-container">
            <h2>I will be the info</h2>
            <section className="summery">
                <h3>
                    {stay.summery}
                </h3>
                <StayReserve/>
            </section>
            
        </section>
    )
}