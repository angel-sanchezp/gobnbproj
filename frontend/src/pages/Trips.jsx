import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { AppFooter } from '../cmps/Stay Layout/AppFooter.jsx'
import { TripPreview } from '../cmps/TripsCmps/TripPreview.jsx'


import { changeHeaderClass } from '../store/stay/stay.actions.js'
import { loadBuyerOrders } from '../store/order/order.actions.js'
import { socketService } from '../services/socket.service.js'


const CLASS = 'general-header';

class _Trips extends Component {
  state = {
    trips: this.props.trips
  }


  componentDidMount() {
    const { user } = this.props
    user && socketService.emit('set-user-socket', user._id)
    this.props.changeHeaderClass(CLASS)
    this.props.loadBuyerOrders();
    this.setState({ trips: this.props.trips })


  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.trips !== this.props.trips) {
      this.setState({ trips: this.props.trips })
      // this.props.loadBuyerOrders();

    }
  }


  // componentWillMount() {
  //   this.props.loadBuyerOrders();
  //   this.props.changeHeaderClass(CLASS)
  // }



  render() {
    const { trips = [] } = this.state

    return (
      <section>

        <section className="order-page">
          <h1>Trips</h1>
          {_.isEmpty(trips) ?
            <section className="section-no-trips">
              <h2 className="bold-txt">No trips booked...yet!</h2>
              <div className="light-txt">Time to dust off your bags and start planning your next adventure</div>
              <button className="btn">Start searching</button>
            </section>
            :
            <ul className="trips-container">
              {trips.map(trip => (<TripPreview key={trip._id} trip={trip} />))}
            </ul>
          }
        </section>
        <AppFooter />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    stays: state.stayModule.stays,
    filterBy: state.stayModule.filterBy,
    class: state.stayModule.classHeader,
    trips: state.orderModule.orders,
    user: state.userModule.user

  }
}

const mapDispatchToProps = {
  loadBuyerOrders,
  changeHeaderClass
}

export const Trips = connect(mapStateToProps, mapDispatchToProps)(_Trips)