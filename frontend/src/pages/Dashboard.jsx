import { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { AppFooter } from '../cmps/Stay Layout/AppFooter.jsx'
import { OrderPreview } from '../cmps/OrderCmps/OrderPreview.jsx'
import { changeHeaderClass } from '../store/stay/stay.actions.js'
import { loadHostOrders, updateOrder, setConfirmedOrder } from '../store/order/order.actions.js'
// import { loadHostOrders, updateOrder, setConfirmedOrder } from '../../src/assets/img/gobnb.jpeg'

import { socketService } from '../services/socket.service.js'
import { userService } from '../services/user.services.js'
import { getWeekYearWithOptions } from 'date-fns/fp'


const CLASS = 'general-header';

class _Dashboard extends Component {
    state = {
        orders: this.props.orders
    }

    componentWillMount() {
        const { user } = this.props
        user && socketService.emit('set-user-socket', user._id)
        this.props.loadHostOrders()
        this.props.changeHeaderClass(CLASS)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.orders !== this.props.orders){
            this.setState({ orders: this.props.orders })
            this.props.loadHostOrders()

        }

    }

    setConfirm = (order) => {
        socketService.emit('confirm order', order);
        this.props.updateOrder(order)
        this.props.setConfirmedOrder()
     
        

        
    }

    render() {
        const { orders = [] } = this.state
    
        const sellerName = _.get(orders, "[0].hostDetails.fullname", "")
        return (
            <section>
                <section className="dashboard-page">
                    <section className="orders">
                        {userService.getLoggedinUser().username === 'lbiton' ? 
                        <section>
                            <h1>Hi, Liat Biton</h1>
                            <h2>Your orders:</h2>
                            
                            <div className="desktop-container" style={{"display": "hidden;"}}>
                            <ul className="trips-container">
                                    {orders.map(order => (<OrderPreview key={order._id} order={order} setConfirm={this.setConfirm}/>))}

                                    <li className="dashboard-card" key='0002'>
                                        <div className="order-details">
                                            <div className="status">Currently hosting</div>
                                            <div className="silver">Sea Apt</div>
                                            <div className="second-row">
                                                <div className="left">
                                                    <div className="buyer-txt">Lior Akiva ( 2 guests )</div>
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
                                                    <div className="buyer-txt">Anna Haskelsky ( 3 guests )</div>
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
                            <div className="desktop-host-container" style={{"display": "hidden;"}}>
                                {/* <img src="../../src/assets/img/gobnb.jpeg"/> */}
                            </div>
                            </div>
                        </section>
                            :

                              
                            <section>
                                  {_.isEmpty(orders)?
                                    <h1>You have no orders yet</h1>
                                    :
                                    <ul className="trips-container">
                                    {orders.map(order => (<OrderPreview key={order._id} order={order} setConfirm={this.setConfirm}/>))}
                                    </ul>
                                  }
                            </section>
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
        orders: state.orderModule.orders,
        user: state.userModule.user

    }
}

const mapDispatchToProps = {
    loadHostOrders,
    changeHeaderClass,
    updateOrder,
    setConfirmedOrder
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)