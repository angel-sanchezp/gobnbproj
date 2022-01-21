import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'
import { HomeHeader } from '../HomeCmps/HomeHeader.jsx';
import { ExpHeader } from '../ExpCmps/ExpHeader.jsx';


// import { user } from '../../assets/icon/user-icon.png'




class _AppFooter extends Component {


    onLogoClicked() {
        window.location.href = `/`
    }

    render() {
        return (
            <footer className="main-footer full">
                <section className='footer-section'>
                    <section className="footer-links-container">
                    <h3>Inspiration for future getaways</h3>
                    <div>
                        <div className='div-link'>
                            <h4>Top Rated</h4>
                        <a href="#/stay/60b6275805f90634a569de93">
                            <span>Villa con migo</span><span>Porto, Portugal</span></a>
                        <a href="#/stay/60b78b96fc53c62764b8f248">
                            <span>Gold Room in Style House</span>
                            <span>Queens, New York, United States  Share</span>
                        </a><a href="#/stay/60b8833ce4f01a2344fb3aef">
                            <span>The Stables at Atias Farm</span>
                            <span>Robertsbridge, England</span></a>
                        <a href="#/stay/60b75b9beb14840eb8fec8c8">
                            <span>Cheval Place for 3 persons.</span>
                            <span>Greater London, England, United Kingdom  Share</span></a>
                        <a href="#/stay/60bc81944cc5b61980857ad6">
                            <span>Sukhumvit</span><span>Bangkok, Thailand</span></a>
                        <a href="#/stay/60bcee9fc6b50f49e080a1ec"><span>Luxurious Bauhaus Suite</span>
                            <span>Tel Aviv, Israel  </span></a><a href="#/stay/60b78c51fc53c62764b8f249">
                            <span>Cozy, quiet room in artist's apartment</span>
                            <span>Brooklyn, New York, United States</span></a>
                        <a href="#/stay/60b7d6c4374aab437c4d2f2e"><span>Beautiful Apartment in Star St</span>
                            <span>Hong Kong, Hong Kong Island, Hong Kong</span></a>
                            </div>
                            <div className='div-link'>
                                <h4>Nearby</h4>
                            <a href="#/stay/60b62227f05845fc38930065"><span>House in the forest</span>
                                <span>Porto, Portugal</span></a><a href="#/stay/60b6275805f90634a569de93">
                                <span>Villa con migo</span><span>Porto, Portugal</span></a>
                            <a href="#/stay/60b6295405f90634a56b9713"><span>Mountain room apartement</span>
                                <span>Porto, Portugal</span></a><a href="#/stay/60b62a5005f90634a56c9067">
                                <span>Private house on the beach</span><span>Porto, Portugal</span></a>
                            <a href="#/stay/60b62b5a05f90634a56d8930">
                                <span>Manorbier- Unique Eco Coastal</span>
                                <span>Porto, Portugal</span></a>
                            <a href="#/stay/60b62c8605f90634a56ea640">
                                <span>House in the valley</span>
                                <span>Porto, Portugal</span></a>
                            <a href="#/stay/60be75a0525f663808b6b423">
                                <span>Green Cottage Porto by City Park</span>
                                <span> Porto, Portugal  </span></a>
                            <a href="#/stay/60be76e5525f663808b6b424">
                                <span>Cardosas Third</span>
                                <span>Porto, Portugal</span></a>
                                </div>
                        <div className='div-link'>
                            <h4>Cities</h4><a href="#/explore">
                            <span>Hong Kong</span><span>China</span>
                        </a><a href="#/explore"><span>Bangkok</span>
                                <span>Thailand</span></a><a href="#/explore">
                                <span>London</span><span>England</span></a>
                            <a href="#/explore"><span>Paris</span>
                                <span>France</span></a><a href="#/explore">
                                <span>Dubai</span><span>United Arab Emirates</span></a>
                            <a href="#/explore"><span>New York</span>
                                <span>United States</span></a>
                            <a href="#/explore"><span>Amsterdam</span>
                                <span>Netherlands</span></a><a href="#/explore">
                                <span>Tel Aviv</span><span>Israel</span></a>
                                </div>
                                </div>
                                </section>
                    <section className="footer-nav-container"><div><p>© 2021 Place&amp; Go,
                        <span>Inc.</span></p><span>·</span><a href="#/about">About</a><span>·</span>
                        <a href="#/login">Login</a><span>·</span><a href="#/host">Become a host</a>
                    </div><div><p><i className="fas fa-globe" aria-hidden="true">
                    </i><span>English (US)</span><span>$ US</span></p><p>
                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                                <i className="fab fa-instagram" aria-hidden="true"></i></p></div>
                    </section>
                </section>
            </footer>
        )
    }
}


function mapStateToProps(state) {
    return {
        class: state.stayModule.classHeader,
        isMinFilter: state.stayModule.isMinFilter
    }
}



export const AppFooter = connect(mapStateToProps)(_AppFooter)


