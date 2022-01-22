import { StayReserve } from './StayReserve.jsx';

export function StayInfo({stay}){
    // console.log(stay)
    return (
        <section className="stay-info-container">
            <section className="summery-info">
            <h2>I will be the info</h2>
                <p>
                    {stay.summery}
                </p>
            </section>
            <section className="reserve">
                <StayReserve/>

            </section>
            
        </section>
    )
}