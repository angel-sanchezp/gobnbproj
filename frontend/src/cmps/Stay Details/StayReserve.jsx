// import { useEffect } from 'react';
import React from 'react'
import moment from 'moment';
import { connect } from 'react-redux'
import { socketService } from '../../services/socket.service.js'
import { Guests } from '../FilterCmps/Guests.jsx'
import { Calendar } from '../FilterCmps/Calendar.jsx'
// import { render } from '@testing-library/react';
import { userService } from '../../services/user.services.js'
import { ReactComponent as Star } from '../../assets/svg/star.svg'
import { addOrder, setNewOrder } from '../../store/order/order.actions.js'


class _StayReserve extends React.Component {

    state = {
        isModalShown: false,
        cmp: null,
        stay: null,
        gTotalPrice: 0,
        order: {
            hostId: this.props.stay.host._id,
            createdAt: new Date(),
            buyer_fullname: userService.getLoggedinUser().fullname,
            buyerId: userService.getLoggedinUser()._id,
            totalPrice: '',
            startDate: '',
            endDate: '',
            adults: '',
            kids: '',
            stay_id: this.props.stay._id,
            stay_name: this.props.stay.name,
            stay_price: '',
            status: 'pending',
        }
    }
    componentDidMount() {
        const { stay } = this.props
        const { _id, name, price, host } = stay
        const { order } = this.state
        order.stay_id = _id
        order.stay_name = name
        order.stay_price = price
        order.hostId = host._id
        order.adults = this.props.filterBy.adults
        order.kids = this.props.filterBy.children
        order.startDate = this.props.filterBy.dateIn
        order.endDate = this.props.filterBy.dateOut
        let date = []
        date.push(parseInt(this.props.filterBy.dateIn))
        date.push(parseInt(this.props.filterBy.dateOut))
        // console.log('date',date)
        order.totalPrice = this.setTotalPrice(date)
        this.setState({ order });
        this.setState({ stay: { ...stay } })
    }



    getInputValue = (date) => {
        if (!date) { return '' }
        return moment(date).format("MMM D")
    }
    onSubmitOrder = async (ev) => {
        ev.preventDefault()
        // console.log('order state', this.state.order)
        await this.props.addOrder(this.state.order)
        socketService.emit('new order', this.state.order);
        // console.log('sockect emit ')
        this.props.setNewOrder()
        // this.closeModal()
    }
    onChangeAdults = (adultsNum) => {
        // console.log(adultsNum)
        const { order } = this.state
        order.adults = adultsNum
        this.setState({ order });
    }
    onChangeChildren = (childrenNum) => {
        // console.log(childrenNum)
        const { order } = this.state
        order.kids = childrenNum
        this.setState({ order });
    }
    onSetDate = (date) => {
        // console.log('dateOn', date)
        var { order } = this.state
        order.startDate = date[0]
        order.endDate = date[1]
        this.setState({ order });
        if (date[1]) {
            setTimeout(() => {
                this.closeModal()
            }, 1000)
        }
        this.setTotalPrice(date)
    }
    setTotalPrice = (date) => {
        console.log(date)
        const date1 = moment(date[0])
        const date2 = moment(date[1])
        const diffDays = date2.diff(date1, 'days')
        let { gTotalPrice } = this.state
        var { order } = this.state
        var price = +this.state.order.stay_price;
        order.totalPrice = diffDays * order.stay_price
        gTotalPrice = diffDays * price
        this.setState({ order });
        this.setState(pre => ({ ...pre, gTotalPrice: gTotalPrice }))
    }
    OpenModal = (indicator) => {
        if (indicator === 'guests') {
            // console.log('here guests')
            this.setState(prev => ({ ...prev, cmp: <Guests onChangeAdults={this.onChangeAdults} onChangeChildren={this.onChangeChildren} /> }))
            this.setState(prev => ({ ...prev, isModalShown: true }))
            // this.toggleModal()
        } else {
            // console.log('here calendar')
            this.setState(prev => ({ ...prev, cmp: <Calendar onSetDate={this.onSetDate} filterBy={this.props.filterBy} /> }))
            this.setState(prev => ({ ...prev, isModalShown: true }))
        }
    }
    closeModal = () => {
        this.setState(prev => ({ ...prev, isModalShown: false }))
    }
    toggleModal = () => {
        this.setState(prev => ({ ...prev, isModalShown: !prev.isModalShown }))
    }
    onAvailablity = () => {
        document.querySelector(".btn2").classList.add("hidden")
        document.querySelector(".order-preview").classList.remove("hidden")
        document.querySelector(".btn1").classList.remove("hidden")
    }
    get formattedGuests() {
        const { kids = 0, adults = 1 } = this.state.order
        let text = `${adults} adult${adults > 1 ? 's' : ''}`
        if (kids) {
            text += `, ${kids} child${kids > 1 ? 's' : ''}`
        }
        return text;
    }
    render() {
        const { reviews } = this.props.stay;
        const { order } = this.state;
        let ReviewsAmount = (reviews.length === 1) ? `${reviews.length} Review` : `${reviews.length} Reviews`;
        if (reviews.length === 0) ReviewsAmount = `No reviews`;
        const formattedDateIn = this.getInputValue(order.startDate)
        // console.log(formattedDateIn)
        const formattedDateOut = this.getInputValue(order.endDate)
        // console.log(formattedDateOut)
        const { isModalShown, cmp } = this.state
        const { price, _id, name } = this.props.stay;
        let total = this.state.gTotalPrice;
        let night = total / price;
        if (!total) {
            total = 0;
            night = 0;
        }
        return (
            <section className="reserve-container">
                <div className="reserve-position">
                    <div className="reserve-box">
                        <div className="reserve-info">
                            <div className="reserve-price">${this.props.stay.price} <span>/night</span></div>
                            <div className="reserve-rate">
                                <span className='dot'><Star /></span>
                                <span className='dot b'>{this.props.stay.rank}</span>
                                <span className='dotr'>· </span>
                                <a className="ab" href="#stayreview"><span className="reserve-reviews">{ReviewsAmount}</span></a>
                            </div>
                        </div>
                        <form onSubmit={this.onSubmitOrder}>
                            <div className="reserve-date-picker">
                                <div className="inout">
                                    <div className="checkin">
                                        <div className="stay-label">
                                            CHECK-IN
                                        </div>
                                        <div className="add">
                                            <span>
                                                <input name="dateIn"
                                                    id="check-in"
                                                    autoComplete="off"
                                                    placeholder="Add dates"
                                                    readOnly
                                                    onClick={() => this.OpenModal('calendar')}
                                                    value={formattedDateIn} /></span>
                                        </div>
                                        <div className="add"></div>
                                    </div>
                                    <div className="checkout">
                                        <div className="stay-label">
                                            CHECKOUT
                                        </div>
                                        <div className="add">
                                            <span>
                                                <input name="dateOut"
                                                    id="check-out"
                                                    autoComplete="off"
                                                    placeholder="Add dates"
                                                    readOnly
                                                    onClick={() => this.OpenModal('calendar')}
                                                    value={formattedDateOut}
                                                    onChange={this.onHandleChange} /></span>
                                        </div>
                                        <div className="add"></div>
                                    </div>
                                    <div className="reserve-guests">
                                        <div className="stay-label">
                                            GUESTS
                                        </div>
                                        <div className="add guest">
                                            <span>
                                                <input name="guests"
                                                    id="guests"
                                                    placeholder={`1 guest`}
                                                    readOnly
                                                    onClick={() => this.OpenModal('guests')}
                                                    value={this.formattedGuests} readOnly /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="reserve-submit gradient btn1 hidden" type="submit">Reserve</button>
                        </form>
                        <button className="reserve-submit btn2 gradient" type="button" onClick={() => this.onAvailablity()}>Check Availability</button>
                        <div className="order-preview hidden">
                            <small>You won't be charged yet</small>
                            <div>
                                <span>${price} X {night} nights</span>
                                <span>${total}</span>
                            </div>
                            <div>
                                <span>Service fee</span>
                                <span>$0</span>
                            </div>
                            <hr />
                            <div>
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                        </div>
                        {isModalShown && <div className="dynamic-modal">
                            {cmp}
                        </div>}
                    </div>
                </div>
            </section>
        )
    }
}
function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays,
        filterBy: state.stayModule.filterBy,
        class: state.stayModule.classHeader,
        trips: state.orderModule.orders
    }
}
const mapDispatchToProps = {
    addOrder,
    setNewOrder
}
export const StayReserve = connect(mapStateToProps, mapDispatchToProps)(_StayReserve)




