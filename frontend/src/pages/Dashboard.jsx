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
                <section className="order-page">
                    <h1>Hi, {sellerName}</h1>
                    <h2>Your reservations</h2>
                    {orders.length === 0 ?
                        <section className="section-no-trips">
                            <div className="light-txt">you have no orders yet!</div>
                        </section>
                        :
                        <ul className="trips-container">
                            {orders.map(order => (<OrderPreview key={order._id} order={order} setConfirm={this.setConfirm}/>))}
                        </ul>
                    }
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