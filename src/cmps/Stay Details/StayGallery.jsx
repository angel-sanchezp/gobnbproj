export function StayGallery({stay}){
    
    return (
        <section className="gallery">
            {/* <h2>I will be a gallery</h2> */}
            <div className="imgs-container">
                {stay.imgUrls.map((img, idx) => (
                    <div className={"img"+idx} key={idx}>
                        <img src={img}  alt="" />
                    </div>
                ))}
            </div>
            <h6>Pictures from Airbnb</h6>

        </section>
    )
}