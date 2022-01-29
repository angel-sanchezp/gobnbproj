
import { Component } from 'react'

import { withRouter } from "react-router-dom"
import moment from 'moment'

class _OrderPreview extends Component {

  
    render(){
        const { 
            order: {
                endDate,
                startDate,
                _id,
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
            <li className="dashboard-card" key={stay_id}>
                <div className="order-details">
                    <div className="status">Request status: {status} </div>
                    <div className="silver">{stay_name}</div>
                    

                    <div className="second-row">
                        <div className="left">
                            <div className="buyer-txt">{buyer_fullname}</div>
                            <div className="buyer-txt">2 guests</div>
                            {/* <div className="buyer-txt">{moment(parseInt(startDate)).format("MMM D")} - {moment(parseInt(endDate)).format("D")}</div> */}
                            <div className="buyer-txt">Feb 3-5</div>
                        </div>
                        <div className="right">
                            <img className="buyer-pic" src="https://scontent.ftlv2-1.fna.fbcdn.net/v/t39.30808-6/242760047_10226828922885236_3213359265222316842_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xiz6-UfeL40AX-79VOi&_nc_ht=scontent.ftlv2-1.fna&oh=00_AT8q0aw1_eXCWF2wcvz9GdQq6ou9YMkzOIoQvMj6fKKncg&oe=61F85FA4"></img>
                        </div>
                        
                    </div>
                </div>

                <div className="buttons">
                    <button className="first-dashboard-btn" onClick={()=>this.props.setConfirm(this.props.order)}>Approve</button>
                    <button className="dashboard-btn">Reject</button>
                </div>
            </li>
        )
    }
 }

  



export const OrderPreview = (withRouter(_OrderPreview))