export function StayGallery({stay}){
    
    return (
        <section className="gallery">
            {/* <h2>I will be a gallery</h2> */}
            <div className="imgs-container">
                {stay.imgUrls.map((img, idx) => (
                   
                    <div class={"img"+idx}> <img src={img} key={idx} alt="" /></div>
                    

                    // <img src={img} className={"img"+idx} key={idx} alt="" />
                    
                ))}
            </div>
            <h6>Pictures from Airbnb</h6>

        </section>
    )
}