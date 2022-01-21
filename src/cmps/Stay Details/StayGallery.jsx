export function StayGallery({stay}){
    
    return (
        <section className="details-gallery">
            {/* <h2>I will be a gallery</h2> */}
            {stay.imgUrls.map((img, idx) => (
                    <img src={img} className={"img-container clean-list"} key={idx} alt="" />    
                ))}
        </section>
        
    )
}