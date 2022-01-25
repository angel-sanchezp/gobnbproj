// import { useEffect } from 'react';
import React from 'react'
import moment from 'moment';

import { Guests } from '../FilterCmps/Guests.jsx'
import { Calendar } from '../FilterCmps/Calendar.jsx'
// import { render } from '@testing-library/react';


import { userService } from '../../services/user.services.js'
import { orderService } from '../../services/order.service.js'

export class StayReserve extends React.Component {

    state = {
        isModalShown: false,
        cmp: null,
        stay: null,
        order: {

            fullname: '',
            _id: '',
            createdAt: new Date(),
                name: 'patricia',
                _id: '1245',
            // buyer:userService.getLoggedinUser(),
            totalPrice: '',
            startDate: '',
            endDate: '',
            guests: {
                adults: '',
                children: ''
            },
            stay_id: '',
            stay_name: '',
            stay_price: '',
            status: 'pending',
        }
    }

    componentDidMount() {
        const { stay } = this.props
        console.log('stay', stay)
        const { _id, name, price, host } = stay
        this.setState(prevState => ({ ...prevState, order: { ...prevState.order, stay: { ...prevState.order.stay, _id: _id } } }))
        this.setState(prevState => ({ ...prevState, order: { ...prevState.order, stay: { ...prevState.order.stay, name: name } } }))
        this.setState(prevState => ({ ...prevState, order: { ...prevState.order, stay: { ...prevState.order.stay, price: price } } }))
        this.setState(prevState => ({ ...prevState, order: { ...prevState.order, stay: { ...prevState.order.stay, price: price } } }))
        this.setState(prevState => ({ ...prevState, order: { ...prevState.order, host: { ...prevState.order.host, fullname: host.fullname } } }))
        this.setState(prevState => ({ ...prevState, order: { ...prevState.order, host: { ...prevState.order.host, _id: host._id } } }))
        this.setState({ stay: { ...stay } })

    }


    getInputValue = (date) => {
        if (!date) { return '' }
        return moment(date).format("MMM D")
    }

    onSubmitOrder = async (ev) => {
        ev.preventDefault()
        console.log('order state', this.state.order)
        await orderService.add(this.state.order)
        console.log('add sucsefully')
        // this.closeModal()
    }


    onChangeAdults = (adultsNum) => {
        console.log(adultsNum)
        this.setState(prevState => ({
            ...prevState, order: { ...prevState.order, guests: { ...prevState.order.guests, adults: adultsNum } }

        }))

    }

    onChangeChildren = (childrenNum) => {
        console.log(childrenNum)
        this.setState(prevState => ({
            ...prevState, order: { ...prevState.order, guests: { ...prevState.order.guests, children: childrenNum } }
        }))
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
        const date1 = moment(date[0])
        const date2 = moment(date[1])
        const diffDays = date2.diff(date1, 'days')

        var { order } = this.state
        order.totalPrice = diffDays * order.stay.price
        this.setState({ order });


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





    render() {

        const { reviews } = this.props.stay;
        let ReviewsAmount = (reviews.length === 1) ? `${reviews.length} Review` : `${reviews.length} Reviews`;
        if (reviews.length === 0) ReviewsAmount = `No reviews`;

        const formattedDateIn = this.getInputValue(this.props.filterBy.dateIn)
        // console.log(formattedDateIn)
        const formattedDateOut = this.getInputValue(this.props.filterBy.dateOut)
        // console.log(formattedDateOut)


        const { isModalShown, cmp } = this.state
        const { price, _id, name } = this.props.stay;


        return (
            <section className="reserve-container">
                <div className="reserve-position">
                    <div className="reserve-box">
                        <div className="reserve-info">
                            <div className="reserve-price">${this.props.stay.price} <span>/night</span></div>
                            <div className="reserve-reviews"><a className="ab" href="#stayreview">{ReviewsAmount}</a></div>
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
                                                    onChange={this.handleChange}
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
                                                    onChange={this.handleChange}
                                                    onClick={() => this.OpenModal('calendar')}
                                                    value={formattedDateOut} /></span>
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
                                                    onChange={this.handleChange}
                                                    onClick={() => this.OpenModal('guests')}
                                                    value={this.props.filterBy.adults} /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="reserve-submit gradient" type="submit">Reserve</button>
                        </form>
                        {isModalShown && <div className="dynamic-modal">
                            {cmp}
                        </div>}
                    </div>
                </div>
            </section>
        )



    }

}
