export function StayGallery({stay}){
    
    return (
        <section className="gallery">
            {/* <h2>I will be a gallery</h2> */}
            <div className="imgs-layout">
                {<img className="img1" src={stay.imgUrls[0]}/>}
                {/* {<img className="img2" src={stay.imgUrls}/>}
                {<img className="img3" src={stay.imgUrls}/>}
                {<img className="img4" src={stay.imgUrls}/>}
                {<img className="img5" src={stay.imgUrls}/>} */}
            </div>

        </section>
    )
}