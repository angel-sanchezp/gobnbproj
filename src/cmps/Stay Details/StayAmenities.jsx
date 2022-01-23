import { imageListClasses } from "@mui/material";
import { isThisSecond } from "date-fns";
import { eventBusService } from "../../services/event-bus.service";

export function StayAmenities({stay}) {
    const { amenities } = stay;
    const showAmenities = amenities.slice(0, 5);


    const setAmenity = (amenity) => {
        let logo;
        // console.log(amenity)
        switch (amenity) {
            case "Kitchen":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/kitchen_n1j0n3.png"];
                break;
            case "Wifi":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862381/Airbnb%20clone/wifi_la4k7v.png"];
                break;
            case "Bath":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862490/Airbnb%20clone/bathtub_h6kiwz.png"];
                break;
            case "Indoor fireplace":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/indoor_fireplace_ywjb0z.png"];
                break;
            case "Parking":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/parking_q8bdfj.png"];
                break;
            case "Stove":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/stove_ta63xx.png"];
                break;
            case "Pool":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/pool_z5m2b4.png"];
                break;
            case "TV":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/tv_qdldsn.png"];
                break;
            case "Washing machine":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/washer_lmfztp.png"];
                break;
            case "Dryer":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/dryer_giewr7.png"];
                break;
            case "Elevator":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/elevator_boepjl.png"];
                break;
            case "Beach access":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/beach_access_qlc0ou.png"];
                break;
            case "Balcony":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/balcony_raoqjb.png"];
                break;
            case "Backyard":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/backyard_vuijod.png"];
                break;
            case "Air conditioning":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642862380/Airbnb%20clone/air_conditioning_fvm5mc.png"];
                break;
            case "Refrigerator":
                logo = ["https://res.cloudinary.com/kitsunex3/image/upload/v1642864461/Airbnb%20clone/ref_rgdvrj.png"];
                break;
        }
        
        return (<img src={logo} alt="Not found" />);
    }

    

    const amenityModal = (isOpen) => {
        console.log(isOpen)
        if(isOpen){
            document.querySelector(".amenities-modal").classList.remove("hidden");
            document.querySelector("body").classList.add("modal-open");
            
        } else if(!isOpen){
            document.querySelector(".amenities-modal").classList.add("hidden");
            document.querySelector("body").classList.remove("modal-open");
        } 
    }

    return (
        <section>
            <section className="amenities-container">
                <div className="h2-general"><h2>What this place offer</h2></div>
                <div className="amenities">
                    {showAmenities.map((amenity, idx) => (
                        <div className="amenity" key={idx}>
                            {setAmenity(amenity)}
                            <span>
                            {amenity}
                            </span>
                            
                        </div>
                    ))}
                </div>
                <button className="more-modal">
                    <div className="cb"onClick={() => amenityModal(true)}>Show all {amenities.length} amenities</div>
                </button>
            </section>
            <section>
                <div className="amenities-modal hidden">
                    <div className="modal-btn">
                        <button  onClick={() => amenityModal(false)}>X</button>
                    </div>
                    <div>
                        <h2>What this place offer</h2>
                        <div className="modal-area">
                        {amenities.map((amenity, idx) => (
                            <div className="amenity" key={idx}>
                                <div className="amenity-img">
                                    {setAmenity(amenity)}
                                </div>
                                {amenity}
                            </div>
                        ))}

                    </div>
                    </div>
                </div>
            </section>
        </section>

    )
}