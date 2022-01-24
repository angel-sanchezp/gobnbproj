// import { useEffect } from 'react';
import React from 'react'
import moment from 'moment';

import { Guests } from '../FilterCmps/Guests.jsx'
import { Calendar } from '../FilterCmps/Calendar.jsx'
// import { render } from '@testing-library/react';

import { utilService } from '../../services/utils.service'

export class StayReserve extends React.Component {

    state = {
        isModalShown: false,
        cmp: null,
        stay:null
    }

    componentDidMount() {
        const { stay } = this.props
        console.log(stay)
        this.setState({ stay: { ...stay } })

    }

    getInputValue = (date) => {
        if (!date) { return '' }
        return moment(date).format("MMM D")
    }


    onChangeAdults = (adultsNum) => {
        console.log(adultsNum)

    }

    onChangeChildren = (childrenNum) => {
        console.log(childrenNum)
    }

    onSetDate = (date) => {

        console.log('dateOn', date)
        if( date[1]){
            setTimeout(() => {
                this.closeModal()
            }, 1000)

 }


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

    createOrder = ({order}) => {

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
        const { price, _id, name} = this.props.stay;
        

        return (
            <section className="reserve-container">
                <div className="reserve-position">
                    <div className="reserve-box">
                        <div className="reserve-info">
                            <div className="reserve-price">${this.props.stay.price} <span>/night</span></div>
                            {/* <div className="per-night">/night</div> */}
                            <div className="reserve-reviews"><a className="ab" href="#stayreview">{ReviewsAmount}</a></div>
                        </div>
                        <form action="">
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
                                            {/* value={dateOut.getDay(),monthNames[dateOut.getMonth()]} /> */}
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
