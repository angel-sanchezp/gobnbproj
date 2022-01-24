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
            <section>
                <section className="main-footer2 full">
                    <section className='footer-section'>
                        <section className="footer-links-container">
                            <div>Inspiration for future getaways</div>
                            <div className='first-footer-container'>
                            
                                            {/* <h4>Top Rated</h4> */}
                                            <div className="row"> 
                                                <a href="#/stay/60b6275805f90634a569de93">
                                                    <span>Villa con migo</span>
                                                    <span>Porto, Portugal</span>
                                                </a>
                                                <a href="#/stay/60b78b96fc53c62764b8f248">
                                                    <span>Gold Room</span>
                                                    <span>Queens, New York</span>
                                                </a><a href="#/stay/60b8833ce4f01a2344fb3aef">
                                                    <span>The Stables</span>
                                                    <span>Robertsbridge</span></a>
                                                <a href="#/stay/60b75b9beb14840eb8fec8c8">
                                                    <span>Cheval Place</span>
                                                    <span>London</span></a>
                                            </div>
                                            
                                            <div className="row"> 
                                                <a href="#/stay/60bc81944cc5b61980857ad6">
                                                    <span>Sukhumvit</span><span>Bangkok, Thailand</span></a>
                                                <a href="#/stay/60bcee9fc6b50f49e080a1ec"><span>Luxurious Bauhaus Suite</span>
                                                    <span>Tel Aviv, Israel  </span></a><a href="#/stay/60b78c51fc53c62764b8f249">
                                                    <span>Cozy, quiet room</span>
                                                    <span>Brooklyn</span></a>
                                                <a href="#/stay/60b7d6c4374aab437c4d2f2e"><span>Beautiful Apartment</span>
                                                    <span>Hong Kong</span></a>
                                            </div>
                                            <div className="row"> 
                                                <a href="#/stay/60b6275805f90634a569de93">
                                                    <span>Villa con migo</span>
                                                    <span>Porto, Portugal</span>
                                                </a>
                                                <a href="#/stay/60b78b96fc53c62764b8f248">
                                                    <span>Gold Room</span>
                                                    <span>Queens, New York</span>
                                                </a><a href="#/stay/60b8833ce4f01a2344fb3aef">
                                                    <span>The Stables</span>
                                                    <span>Robertsbridge</span></a>
                                                <a href="#/stay/60b75b9beb14840eb8fec8c8">
                                                    <span>Cheval Place</span>
                                                    <span>London</span></a>
                                            </div>
                                        
                                            
                                            <div className="row"> 
                                                <a href="#/stay/60bc81944cc5b61980857ad6">
                                                    <span>Sukhumvit</span><span>Bangkok, Thailand</span></a>
                                                <a href="#/stay/60bcee9fc6b50f49e080a1ec"><span>Luxurious Bauhaus Suite</span>
                                                    <span>Tel Aviv, Israel  </span></a><a href="#/stay/60b78c51fc53c62764b8f249">
                                                    <span>Cozy, quiet room</span>
                                                    <span>Brooklyn</span></a>
                                                <a href="#/stay/60b7d6c4374aab437c4d2f2e"><span>Beautiful Apartment</span>
                                                    <span>Hong Kong</span></a>
                                            </div>
                            </div>
                        </section>
                    </section>
                </section>
                <footer className="main-footer full">
                    <section className='footer-section'>
                        <section className="footer-links-container">
                      

                            <div className='second-footer-container'>
                                <div className='div-link'>
                                    <h4>Top Japan</h4>
                                    <a href="#/stay/60b62227f05845fc38930065">
                                        <span>Reversible Destiny Lofts</span>
                                        <span>Japan, Tokyo</span>
                                    </a>
                                        
                                        <a href="#/stay/60b6275805f90634a569de93">

                                        <span>Shibuya House</span><span>Japan, Tokyo</span></a>

                                    <a href="#/stay/60b6295405f90634a56b9713"><span>Central TKO</span>
                                        <span>Japan, Tokyo</span></a><a href="#/stay/60b62a5005f90634a56c9067">

                                        <span>Private house on the beach</span><span>Porto, Portugal</span></a>
                                
                                </div>

                                <div className='div-link'>
                                    <h4>Top Greece</h4>

                                    <a href="#/explore">
                                        <span>Anemi Lovers House</span>
                                        <span>Oia, Santorini</span>
                                    </a>

                                    <a href="#/explore">
                                        <span>Cosmoia Cave House</span>
                                        <span>Fira, Santorini</span>
                                    </a>

                                    <a href="#/explore">
                                        <span>Santorini Sky</span>
                                        <span>Fira, Santorini</span>
                                    </a>

                                    <a href="#/explore">
                                        <span>Divine View Collection</span>
                                        <span>Oia, Santorini</span>
                                    </a>

                                </div>
                                <div className='div-link'>
                                    <h4>Top France</h4>

                                    <a href="#/explore">
                                        <span>Studio climatisé</span>
                                        <span>Nice, France</span>
                                    </a>

                                    <a href="#/explore">
                                        <span>Studio climatisé</span>
                                        <span>Nice, France </span>
                                    </a>

                                    <a href="#/explore">
                                        <span>Studio proche Eglise</span>
                                        <span>Lyon, France</span>
                                    </a>

                                    <a href="#/explore">
                                        <span>Beau studio</span>
                                        <span>Cannes, France</span>
                                    </a>

                                </div>
                                <div className='div-link'>
                                    <h4>Top Mexico</h4>

                                    <a href="#/explore">
                                        <span>Jardines de la Costa</span>
                                        <span>Cancun, Mexico</span>
                                    </a>

                                    <a href="#/explore">
                                        <span>AMAZING LOFT</span>
                                        <span>Ciudad, Mexico</span>
                                    </a>

                                    <a href="#/explore">
                                        <span>1954 Roma Norte</span>
                                        <span>Ciudad, Mexico</span>
                                    </a>

                                    <a href="#/explore">
                                        <span>Sanah Villa</span>
                                        <span>Tulum, Mexico</span>
                                    </a>

                                </div>
                            </div>
                        </section>
                    </section>
                </footer>
                <section className="footer-nav-container">
                    <div className="copyrights">
                        <p>© 2021 Go<span className="fab fa-airbnb" aria-hidden="true"></span>bnb,
                        <span>Inc.</span></p><span>·</span><a href="#/about">About</a><span>·</span>
                        <a href="#/login">Login</a><span>·</span><a href="#/host">Become a host</a>
                    </div>
                    
                    <div className="footer-secont-container">
                        <p className="language"><i className="fas fa-globe" aria-hidden="true">
                        </i><span className="currancy">English (US)</span><span>$ US</span></p>
                        <p className="social-nav-bar">
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </p>
                    </div>
                </section>
            </section>
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


