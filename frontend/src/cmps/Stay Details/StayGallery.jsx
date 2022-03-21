export function StayGallery({stay}){
    
    return (
        <section className="details-gallery">
            {stay.imgUrls.map((img, idx) => (
                    <img src={img} className={"img-container clean-list"} key={idx} alt="" />    
                ))}
        </section>
        
    )
}