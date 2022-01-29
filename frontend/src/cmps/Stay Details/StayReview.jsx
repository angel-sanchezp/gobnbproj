export function StayReview({stay}){
    const { reviews } = stay;
    const showReviews = (reviews.length > 4) ? reviews.slice(0,4) : reviews.slice();
    let reviewBtn = (reviews.length === 1 ) ? `Show ${reviews.length} review` : `Show all ${reviews.length} reviews`;
    let reviewHeader = (reviews.length === 1 ) ? ` ${reviews.length} review` : `${reviews.length} reviews`;
    if(reviews.length === 0) {
        reviewBtn = `No reviews`;
        reviewHeader = `No reviews`;
    }
    // console.log(showReviews);
    
    
    const reviewModal = (isOpen) => {
        if(reviews.length === 0) return;
        if(isOpen){
            document.querySelector(".reviews-modal").classList.remove("hidden");
            document.querySelector("body").classList.add("modal-open");
        } else if(!isOpen){
            document.querySelector(".reviews-modal").classList.add("hidden");
            document.querySelector("body").classList.remove("modal-open");
        }
    }
    
    const getDate = (dateToString) => {
        const options = {month: "long", year:"numeric"};
        const date = new Date(dateToString)
        const longDate = new Intl.DateTimeFormat("en-US", options).format(date);
        return longDate;
    }


    return (
        <section className="reviews-container bd" id="stayreview">
            <section className="review-general" >
                <div className="review-rate">
                    <h2>{reviewHeader} </h2>
                </div>
                <div className="review-statistics">
                    <div className="ratings">
                        <div>Cleanliness</div>
                        <div className="rate-score">
                            <div className="fl">
                                <div className="progress">
                                </div>
                                <span>5.0</span>
                            </div>
                        </div>
                    </div>
                    <div className="ratings">
                        <div>Communication</div>
                        <div className="rate-score">
                            <div className="fl">
                                <div className="progress">
                                </div>
                                <span>5.0</span>
                            </div>
                        </div>
                    </div>
                    <div className="ratings">
                        <div>Check-in</div>
                        <div className="rate-score">
                            <div className="fl">
                                <div className="progress">
                                </div>
                                <span>3.9</span>
                            </div>
                        </div>
                    </div>
                    <div className="ratings">
                        <div>Accuracy</div>
                        <div className="rate-score">
                            <div className="fl">
                                <div className="progress">
                                </div>
                                <span>4.0</span>
                            </div>
                        </div>
                    </div>
                    <div className="ratings">
                        <div>Location</div>
                        <div className="rate-score">
                            <div className="fl">
                                <div className="progress">
                                </div>
                                <span>4.8</span>
                            </div>
                        </div>
                    </div>
                    <div className="ratings">
                        <div>Value</div>
                        <div className="rate-score">
                            <div className="fl">
                                <div className="progress">

                                </div>
                                <span>5.0</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="review-list">
                <div className="reviews">
                {showReviews.map((review = {}, idx) => (
                        <div className="review-preview" key={idx}>
                            <div className="review-info">
                                <img className="review-user" src={review.by.imgUrl} alt="Not found" />
                                <div>
                                <h3>{review.by.fullname}</h3>
                                <div className="review-date"><span>{getDate(review.created)}</span></div>
                                </div>
                            </div>
                            <p>
                                {review.txt}
                            </p>
                            
                        </div>
                    ))}
                </div>
                <button className="more-modal">
                    <div className="cb"onClick={() => reviewModal(true)}>{reviewBtn}</div>
                </button>
            </section>
            <section>
                <div className="reviews-modal hidden">
                    <div className="modal-btn">
                        <button  onClick={() => reviewModal(false)}>X</button>
                    </div>
                    <div>
                        <h2>{reviews.length} Reviews</h2>
                        <div className="modal-area rm">
                        {reviews.map((review, idx) => (
                            <div className="review-preview" key={idx}>
                            <div className="review-info">
                                <img className="review-user" src={review.by.imgUrl} alt="Not found" />
                                <div>
                                <h3>{review.by.fullname}</h3>
                                <div className="review-date"><span>{getDate(review.created)}</span></div>
                                </div>
                            </div>
                            <p>
                                {review.txt}
                            </p>
                        </div>
                        ))}

                    </div>
                    </div>
                </div>
            </section>

        </section>
    )
}