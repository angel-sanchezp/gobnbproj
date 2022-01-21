export function StayGallery({stay}){
    
    return (
        <section className="gallery">
            {/* <h2>I will be a gallery</h2> */}
            {/* TODO: Change to map later  */}
            <div className="imgs-layout">
                {<img className="img1" src={stay.imgUrls[0]}/>}
                {<img className="img2" src={stay.imgUrls[1]}/>}
                {<img className="img3" src={stay.imgUrls[2]}/>}
                {<img className="img4" src={stay.imgUrls[3]}/>}
                {<img className="img5" src={stay.imgUrls[4]}/>}
            </div>
            <h6>Pictures from Airbnb</h6>

        </section>
    )
}