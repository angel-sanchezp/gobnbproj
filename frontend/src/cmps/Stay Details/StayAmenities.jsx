import { imageListClasses } from "@mui/material";
import { isThisSecond } from "date-fns";
import { eventBusService } from "../../services/event-bus.service";

import { ReactComponent as Kitchen } from '../../assets/svg/amenities/kitchen.svg'
import { ReactComponent as Wifi } from '../../assets/svg/amenities/wifi.svg'
import { ReactComponent as Bath } from '../../assets/svg/amenities/bath.svg'
import { ReactComponent as IndoorFireplace } from '../../assets/svg/amenities/fireplace.svg'
import { ReactComponent as Parking } from '../../assets/svg/amenities/parking.svg'
import { ReactComponent as Stove } from '../../assets/svg/amenities/stove.svg'
import { ReactComponent as Pool } from '../../assets/svg/amenities/pool.svg'
import { ReactComponent as TV } from '../../assets/svg/amenities/tv.svg'
import { ReactComponent as WashingMachine } from '../../assets/svg/amenities/washingmachine.svg'
import { ReactComponent as Dryer } from '../../assets/svg/amenities/dryer.svg'
import { ReactComponent as Elevator } from '../../assets/svg/amenities/elevator.svg'
import { ReactComponent as BeachAccess } from '../../assets/svg/amenities/BeachAccess.svg'
import { ReactComponent as Balcony } from '../../assets/svg/amenities/balcony.svg'
import { ReactComponent as Backyard } from '../../assets/svg/amenities/backyard.svg'
import { ReactComponent as AC } from '../../assets/svg/amenities/ac.svg'
import { ReactComponent as Refrigerator } from '../../assets/svg/amenities/refrigerator.svg'


export function StayAmenities({stay}) {
    const { amenities } = stay;
    const showAmenities = amenities.slice(0, 5);


    const setAmenity = (amenity) => {
        let logo;
        // console.log(amenity)
        switch (amenity) {
            case "Kitchen":
                logo = <Kitchen/>;
                break;
            case "Wifi":
                logo = <Wifi/>;
                break;
            case "Bath":
                logo = <Bath/>;
                break;
            case "Indoor fireplace":
                logo = <IndoorFireplace/>;
                break;
            case "Parking":
                logo = <Parking/>;
                break;
            case "Stove":
                logo = <Stove/>;
                break;
            case "Pool":
                logo = <Pool/>;
                break;
            case "TV":
                logo = <TV/>;
                break;
            case "Washing machine":
                logo = <WashingMachine/>;
                break;
            case "Dryer":
                logo = <Dryer/>;
                break;
            case "Elevator":
                logo = <Elevator/>;
                break;
            case "Beach access":
                logo = <BeachAccess/>
                break;
            case "Balcony":
                logo = <Balcony/>;
                break;
            case "Backyard":
                logo = <Backyard/>;
                break;
            case "Air conditioning":
                logo = <AC/>;
                break;
            case "Refrigerator":
                logo = <Refrigerator/>;
                break;
        }
        return (<div>{logo}</div>)
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
                            <span className="a-icon">
                                {setAmenity(amenity)}
                            </span>
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
                                <div className="a-icon">
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