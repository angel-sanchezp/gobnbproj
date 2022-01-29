import { Component } from 'react'
import { connect } from 'react-redux'
import { HomeHeader } from '../HomeCmps/HomeHeader.jsx';
import { ExpHeader } from '../ExpCmps/ExpHeader.jsx';
import { HeaderFilters } from '../Stay Layout/HeaderFilters.jsx';
import { GeneralHeader } from '../Stay Layout/GeneralHeader.jsx';
// import { socketService } from '../../services/socket.service.js'
import { addOrder } from '../../store/order/order.actions.js'

// import { user } from '../../assets/icon/user-icon.png'

const ExploreHeader = () => (
    <>
        <ExpHeader />
        <HeaderFilters />
    </>
)

const WrappedHomeHeader = ({ className }) => (
    <header className={className}>
        <HomeHeader />
    </header>
)

const HEADERS = {
    "explore-header": ExploreHeader,
    "details-header": ExpHeader,
    "general-header": GeneralHeader,

}

class _AppHeader extends Component {

    onLogoClicked() {
        window.location.href = `/`
    }

    // componentDidMount() {
    //     socketService.off('confirm order');
    //     socketService.on('confirm order',(order)=> this.setOrderConfirm(order));
    //     socketService.off('new order');
    //     socketService.on('new order', (order)=>this.setOrderRecived(order));

    // }

    // setOrderRecived=(order)=>{
    //     this.props.addOrder(order)
    // }

    // setOrderConfirm = (order) => {
    //     console.log('order confirmed')

   
    // }
    // const { trips } = this.props
    // if (trips.status === 'pending') trips.status = 'Confirmed'
    // this.setState({ trips })

    render() {
        const Header = HEADERS[this.props.class] || WrappedHomeHeader;

        return (
            <Header className={this.props.class} />
        )
    }
}


function mapStateToProps(state) {
    return {
        class: state.stayModule.classHeader,
        isMinFilter: state.stayModule.isMinFilter
    }
}
const mapDispatchToProps = {
    addOrder
}

export const AppHeader = connect(mapStateToProps,mapDispatchToProps)(_AppHeader)


