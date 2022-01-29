import { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { AppFooter } from '../cmps/Stay Layout/AppFooter.jsx'
import { OrderPreview } from '../cmps/OrderCmps/OrderPreview.jsx'
import { changeHeaderClass } from '../store/stay/stay.actions.js'
import { loadHostOrders, updateOrder } from '../store/order/order.actions.js'
import { socketService } from '../services/socket.service.js'


const CLASS = 'general-header';

class _Dashboard extends Component {
    componentWillMount() {
        this.props.loadHostOrders()
        this.props.changeHeaderClass(CLASS)
    }

    setConfirm=(orderId)=>{
        socketService.emit('confirm order',orderId);
        this.props.updateOrder(orderId)
    }

    render() {
        const { orders = [] } = this.props
        const sellerName = _.get(orders, "[0].hostDetails.fullname", "")
        // console.log(orders)
        return (
            <section>
                <section className="dashboard-page">
                    <section className="orders">
                        <h1>Hi, {sellerName}</h1>
                        <h2>Your orders:</h2>
                        {orders.length === 0 ?
                            <section className="section-no-trips">
                                <div className="light-txt">you have no orders yet!</div>
                            </section>
                            :
                            <ul className="trips-container">
                                {orders.map(order => (<OrderPreview key={order._id} order={order} setConfirm={this.setConfirm}/>))}

                                <li className="dashboard-card" key='0002'>
                                    <div className="order-details">
                                        <div className="status">Currently hosting</div>
                                        <div className="silver">Sea Apt</div>
                                        <div className="second-row">
                                            <div className="left">
                                                <div className="buyer-txt">Lior Akiva</div>
                                                <div className="buyer-txt">2 guests</div>
                                                <div className="buyer-txt">Feb 1-3</div>
                                            </div>
                                            <div className="right">
                                                <img className="buyer-pic" src="https://ca.slack-edge.com/T02BJ4W8H45-U02JZS6MFPF-efea3793faca-72"></img>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="buttons">
                                        <button className="first-dashboard-btn">Message</button>
                                        <button className="dashboard-btn">Call</button>
                                    </div>
                                </li>
                                <li className="dashboard-card" key='0003'>
                                    <div className="order-details">
                                        <div className="status">Expired</div>
                                        <div className="silver">Dream House</div>
                                        <div className="second-row">
                                            <div className="left">
                                                <div className="buyer-txt">Anna Haskelsky</div>
                                                <div className="buyer-txt">3 guests</div>
                                                <div className="buyer-txt">Jan 27-29</div>
                                            </div>
                                            <div className="right">
                                                <img className="buyer-pic" src="https://ca.slack-edge.com/T02BJ4W8H45-U02L7Q793Q8-c8059c97fe16-72"></img>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="buttons">
                                        <button className="first-dashboard-btn">Message</button>
                                        <button className="dashboard-btn">Call</button>
                                    </div>
                                </li>
                            </ul>
                        }
                    </section>
                </section>
                <AppFooter />
            </section>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        stays: state.stayModule.stays,
        filterBy: state.stayModule.filterBy,
        class: state.stayModule.classHeader,
        orders: state.orderModule.orders
    }
}

const mapDispatchToProps = {
    loadHostOrders,
    changeHeaderClass,
    updateOrder
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)