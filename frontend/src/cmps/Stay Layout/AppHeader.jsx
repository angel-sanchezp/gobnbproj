import { Component } from 'react'
import { connect } from 'react-redux'
import { HomeHeader } from '../HomeCmps/HomeHeader.jsx';
import { ExpHeader } from '../ExpCmps/ExpHeader.jsx';
import { HeaderFilters } from '../Stay Layout/HeaderFilters.jsx';
// import { user } from '../../assets/icon/user-icon.png'

const ExploreHeader = () => (
    <>
        <ExpHeader />
        <HeaderFilters/>
    </>
)

const WrappedHomeHeader = ({ className }) => (
    <header className={className}>
        <HomeHeader/>
    </header>
)

const HEADERS = {
    "explore-header": ExploreHeader,
    "details-header": ExpHeader,
    "general-header": ExpHeader,

}

class _AppHeader extends Component {

    onLogoClicked() {
        window.location.href = `/`
    }

    render() {
        const Header = HEADERS[this.props.class] || WrappedHomeHeader;

        return (
            <Header className={this.props.class}/>
        )
    }
}


function mapStateToProps(state) {
    return {
        class: state.stayModule.classHeader,
        isMinFilter: state.stayModule.isMinFilter
    }
}

export const AppHeader = connect(mapStateToProps)(_AppHeader)


