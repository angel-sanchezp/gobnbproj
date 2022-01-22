export function StayReview({stay}){
    const { reviews } = stay;
    console.log(reviews);
    return (
        <section className="reviews-container" id="stayreview">
            <section className="review-general" >
                <div className="review-rate">
                    <h2>reviews</h2>
                    </div>
                <div className="review-statistics">
                    I will show statistics
                </div>
            </section>
            <section className="review-list">
                <section className="review-preview">
                    Review
                </section>
            </section>

        </section>
    )
}