import { utilService } from '../../services/utils.service.js'
import { ReactComponent as Star } from '../../assets/svg/star.svg'

export function StayPreview({stay, dateIn, dateOut, onStayClicked }) {

    return(
        <li className="explore-card-stay card" key={stay._id} onClick={() => onStayClicked(stay._id)}>
            <img className="explore-card-image" alt="cat" src={stay.imgUrls[0]} />
            
            <div className="stay-details">
                <div className="line1">
                    <div className="star"><Star/></div>
                    <div className="rank">4.73</div>
                    <div className="review-count"> ({stay.reviews.length})</div>
                </div>
                <div className="line2">  
                    <div className="black-solid-txt">{stay.location.address.length > 35 ? stay.location.address.slice(0, 35).concat('...') : stay.location.address}</div>
                    
                    {/* <div className="black-solid-txt">{stay.location.city}</div> */}
                </div>
                <div className="line3">
                    <div className="black-solid-txt">{stay.name.length > 35 ? stay.name.slice(0, 35).concat('...') : stay.name}</div>    
                </div>
                <div className="line4">
                    <div className="black-bold-txt">${stay.price.toLocaleString()}</div>
                    <div className="black-solid-txt"> / night</div>

                    {/* <div className="gray-txt">{utilService.getRandomIntInclusive(1000, 3000)} kilometers away</div>
                    {dateOut && dateIn && <div className="gray-small-txt">{this.formatDates(dateIn, dateOut)}</div>}
                    {!dateIn && !dateOut && <div className="gray-small-txt">Jan 21 -28</div>} { /** TODO : Fix the random */}
                </div>
            </div>
        </li>
       
    )

}