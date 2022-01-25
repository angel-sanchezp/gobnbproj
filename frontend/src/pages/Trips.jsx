import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import moment from 'moment'
import { AppFooter } from '../cmps/Stay Layout/AppFooter.jsx'
import { TripPreview } from '../cmps/TripsCmps/TripPreview.jsx'

import { changeHeaderClass } from '../store/stay/stay.actions.js'
import { utilService } from '../services/utils.service'



const orders = [
    {
      "_id": "o1225",
      "hostId": "u102",
      "hostname": "Chris",
      "createdAt": 9898989,
      "buyer": {
        "_id": "u101",
        "fullname": "User 1"
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
        "adults": 2,
        "kids": 1
      },
      "stay": {
        "_id": "s0004",
        "name": "Montmartre 2BD/Spectacular Views",
        "price": 680.0,
        "img": "https://res.cloudinary.com/kitsunex3/image/upload/v1642652059/Airbnb%20clone/104ca552-d981-4e74-b9cf-0ee2e7b37d6d_vuzbvm.jpg"
      },
      "status": "pending"
    },
    {
        "_id": "o1225",
        "hostId": "u102",
        "hostname": "Michelle",
        "createdAt": 9898989,
        "buyer": {
          "_id": "u101",
          "fullname": "User 1"
        },
        "totalPrice": 160,
        "startDate": "2025/10/15",
        "endDate": "2025/10/17",
        "guests": {
          "adults": 2,
          "kids": 1
        },
        "stay": {
          "_id": "s0008",
          "name": "The Seashell House",
          "price": 299.0,
          "img": "https://res.cloudinary.com/kitsunex3/image/upload/v1642841396/Airbnb%20clone/b4bc6418_original_mkxjmm.jpg"
        },
        "status": "pending"
      }
  ]

class _Trips extends Component {
    state = {
        trips: orders,
        class: 'trip-header',
    }

    componentWillMount() {
        this.props.changeHeaderClass(this.state.class)
    }

    render() {
        const { trips } = this.state
        console.log(trips)
        return (
            <section>

                <section className="order-page">
                    <h1>Trips</h1>
                    {trips.length === 0 ?
                        <section class="section-no-trips">
                            <h2 className="bold-txt">No trips booked...yet!</h2>
                            <div className="light-txt">Time to dust off your bags and start planning your next adventure</div>
                            <button className="btn">Start searching</button>
                        </section>
                        :
                        <ul className="trips-container">
                         {trips.map(trip =>(<TripPreview key={trip._id} trip={trip} />))}
                        </ul>
                        
                    }
                </section>



                <AppFooter/>
            </section>
        )
    }
    

}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays,
        filterBy: state.stayModule.filterBy,
        class: state.stayModule.classHeader
    }
}

const mapDispatchToProps = {
    // loadStays,
    changeHeaderClass
}

export const Trips = connect(mapStateToProps, mapDispatchToProps)(_Trips)