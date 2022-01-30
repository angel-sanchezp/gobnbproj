import { Component } from 'react'
import { connect } from 'react-redux'
import { HomeHeader } from '../HomeCmps/HomeHeader.jsx';
import { ExpHeader } from '../ExpCmps/ExpHeader.jsx';
import { HeaderFilters } from '../Stay Layout/HeaderFilters.jsx';
import { socketService } from '../../services/socket.service.js'
import { addOrder, updateOrder, loadHostOrders, loadBuyerOrders } from '../../store/order/order.actions.js'
import { userService } from '../../services/user.services.js'
import { GeneralHeader } from '../Stay Layout/GeneralHeader.jsx';
import { withRouter } from 'react-router-dom';

// import { socketService } from '../../services/socket.service.js'

// import { user } from '../../assets/icon/user-icon.png'

const ExploreHeader = () => (
    <>
        <ExpHeader />
        <HeaderFilters />
    </>
)

const WrappedHomeHeader = (props) => (
    <header className={props.className} >
        <HomeHeader {...props} />
    </header>
)


const HEADERS = {
    "explore-header": ExploreHeader,
    "details-header": ExpHeader,
    "general-header": GeneralHeader,

}

class _AppHeader extends Component {

    state = {
        isRedDot: false
    };

    onLogoClicked() {
        window.location.href = `/`
    }

    componentDidMount() {
        socketService.off('confirm order');
        socketService.off('new order');
        socketService.on('confirm order', this.setOrderConfirm);
        socketService.on('new order', this.setOrderRecived);

    }

    componentDidUpdate(prevProps) {

        if (prevProps.location.pathname !== this.props.location.pathname) {
            if (this.props.location.pathname === '/trips' || this.props.location.pathname === '/dashboard') {
                this.setState({ isRedDot: false, isNewOrder: false, isOrderConfirmed: false })
            }
        }
    }


    setOrderRecived = () => {
        const user = userService.getLoggedinUser()
        console.log('order received!', user.isHost)
        if (user.isHost) {
            // this.props.loadHostOrders()
            this.setState({ isRedDot: true, isNewOrder: true })
        } else {
            this.props.loadBuyerOrders()
        }
    }

    setOrderConfirm = () => {
        const user = userService.getLoggedinUser()
        console.log('order confirmed!', user.isHost);
        // if (this.props.location.pathname !== '/trips') {
        // }
        if (!user.isHost) {
            this.setState({ isRedDot: true, isOrderConfirmed: true })
            // this.props.loadHostOrders()
        } else {
            this.props.loadBuyerOrders()

        }
    }



    render() {
        const Header = HEADERS[this.props.class] || WrappedHomeHeader;

        return (
            <Header className={this.props.class} isRedDot={this.state.isRedDot} />
        )
    }
}


function mapStateToProps(state) {
    return {
        class: state.stayModule.classHeader,
        isMinFilter: state.stayModule.isMinFilter,
        user: state.userModule.user,
        orders: state.orderModule.orders,
        isConfirmedOrder: state.orderModule.isConfirmedOrder
    }
}
const mapDispatchToProps = {
    addOrder,
    updateOrder,
    loadHostOrders,
    loadBuyerOrders,


}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(withRouter(_AppHeader))


