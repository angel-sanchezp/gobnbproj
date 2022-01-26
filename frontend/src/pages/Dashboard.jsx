import { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { AppFooter } from '../cmps/Stay Layout/AppFooter.jsx'
import { OrderPreview } from '../cmps/OrderCmps/OrderPreview.jsx'
import { changeHeaderClass } from '../store/stay/stay.actions.js'
import { loadOrders } from '../store/order/order.actions.js'


const orders = [{
    "_id": 'ObjectId("61f16f179c39abbe059e4fd2")',
    "hostId": "h0015",
    "host_name": "Liat",
    "createdAt": "2022-01-26T15:56:03.881Z",
    "buyer_fullname": "patricia",
    "buyer_id": "1245",
    "startDate": 1643666400000.0,
    "endDate": 1643752800000.0,
    "stay_id": "61eeaf8246ec0efdc45af89e",
    "stay_name": "Sleeping under the stars in a dome!",
    "stay_price": 268,
    "status": "pending",
    "stay_img": "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/104ca552-d981-4e74-b9cf-0ee2e7b37d6d_vuzbvm.jpg"
},
{
    "_id": 'ObjectId("61f1263efe9fc0b5fcafe17e")',
    "hostId": "h0008",
    "host_name": "Liat",
    "createdAt": "2022-01-26T10:44:57.569Z",
    "buyer_fullname": "patricia",
    "buyer_id": "1245",
    "startDate": 1644703200000.0,
    "endDate": 1644962400000.0,
    "adults": 2,
    "kids": 2,
    "stay_id": "61eead5646ec0efdc45af897",
    "stay_name": "The Seashell House",
    "stay_price": 299,
    "status": "pending",
    "stay_img": "https://res.cloudinary.com/kitsunex3/image/upload/v1642841396/Airbnb%20clone/b4bc6418_original_mkxjmm.jpg"
}
]

class _Dashboard extends Component {
    state = {
        orders: orders,
        class: 'general-header',
    }



    componentWillMount() {
        this.props.changeHeaderClass(this.state.class)
    }

    render() {
        const { orders } = this.state
        console.log(orders)
        return (
            <section>
                <section className="order-page">
                    <h1>Hi, {orders[0].host_name}</h1>
                    <h2>Your reservations</h2>
                    {orders.length === 0 ?
                        <section class="section-no-trips">
                            <div className="light-txt">you have no orders yet!</div>
                        </section>
                        :
                        <ul className="trips-container">
                            {/* {orders.map(order => (<OrderPreview key={order._id} order={order} />))} */}
                        </ul>

                    }
                </section>
                <AppFooter />
            </section>
        )
    }


}

function mapStateToProps(state) {
    console.log(state)
    return {
        stays: state.stayModule.stays,
        filterBy: state.stayModule.filterBy,
        class: state.stayModule.classHeader,
        orders: state.orderModule.orders
    }
}

const mapDispatchToProps = {
    loadOrders,
    changeHeaderClass
}




export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)