
import { Component } from 'react'
// import { utilService } from '../../services/utils.service.js'
// import { ReactComponent as Star } from '../../assets/svg/star.svg'
import { withRouter } from "react-router-dom"
import { Trips } from '../../pages/Trips'

class _OrderPreview extends Component {

  
    render(){
        const { 
            order: {
                stay_id,
                stayDetails: {
                    imgUrls: [firstImageUrl]
                },
                stay_name,
                status,
                buyer_fullname
            }
        } = this.props;




        return(
            <li className="trip-card" key={stay_id}>
                <img className="trip-card-image" alt="cat" src={firstImageUrl} />
                <div className="trip-details">
                    <h2 className="bold-txt">{stay_name}</h2>
                    <div className="dates">
                        <div className="check-in-box">
                            <div className="bold">Check-in</div>
                            <div>Fri,Sep 29,2022</div>
                            <div>11:00 AM</div>
                        </div>
                        <div className="check-out-box">
                            <div className="bold">Checkout</div>
                            <div>Fri,Sep 31,2022</div>
                            <div>15:00 AM</div>
                        </div>
                    </div>
                    <div className="tripcard-bottom">
                        <div className="status-host">
                            <div className="txt">Order status: {status}</div>
                            <div className="txt">Orded by {buyer_fullname}</div>
                        </div>
                        <button className="btn" onClick={()=>this.props.setConfirm(this.props.order)}>Approve</button>
                    </div>
                </div>
            </li>
        )
    }
 }

  



export const OrderPreview = (withRouter(_OrderPreview))