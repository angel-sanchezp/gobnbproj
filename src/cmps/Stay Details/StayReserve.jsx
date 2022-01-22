export function StayReserve({stay}){
    // console.log(stay)
    const  {reviews}  = stay;
    const ReviewsAmount = (reviews.length === 1 ) ? `${reviews.length} Review` : `${reviews.length} Reviews`;
    return (
        <section className="reserve-container">
            <div className="reserve-position">
            <div className="reserve-box">
                <div className="reserve-info">
                    <div className="reserve-price">${stay.price} <span>/night</span></div> 
                    {/* <div className="per-night">/night</div> */}
                    <div className="reserve-reviews"><a className="ab" href="#stayreview">{ReviewsAmount}</a></div>              
                </div>

            </div>

            </div>

        </section>
    )
}