import { useEffect} from 'react';


export function StayReserve({stay}){
    // console.log(stay)
    const  {reviews}  = stay;
    let ReviewsAmount = (reviews.length === 1 ) ? `${reviews.length} Review` : `${reviews.length} Reviews`;
    if(reviews.length === 0) ReviewsAmount = `No reviews`;


    return (
        <section className="reserve-container">
            <div className="reserve-position">
                <div className="reserve-box">
                    <div className="reserve-info">
                        <div className="reserve-price">${stay.price} <span>/night</span></div> 
                        {/* <div className="per-night">/night</div> */}
                        <div className="reserve-reviews"><a className="ab" href="#stayreview">{ReviewsAmount}</a></div>              
                    </div>
                    <form action="">
                        <div className="reserve-date-picker">
                            <div className="inout">
                                <div className="checkin">
                                    <div className="stay-label">
                                        CHECK-IN
                                    </div>
                                    <div className="add">
                                        <input type="date" autoComplete="off" name placeholder="Add date"/>
                                    </div>
                                    <div  className="add"></div>
                                </div>
                                <div className="checkout">
                                    <div className="stay-label">
                                        CHECKOUT
                                    </div>
                                    <div className="add">
                                        <input type="date" autoComplete="off" name placeholder="Add date"/>
                                    </div>
                                    <div  className="add"></div>
                                </div>
                                <div className="reserve-guests">
                                    <div className="stay-label">
                                        GUESTS
                                    </div>
                                    <div className="add guest">
                                        <input type="number" autoComplete="off" name placeholder="1 guest"/>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="gradient" style={{background: "radial-gradient(circle at -0.5px 27.4062px, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%)"}}>Reserve</button>
                    </form>
                </div>
            </div>
        </section>
    )
}