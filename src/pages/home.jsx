import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'


import { loadStays,  changeHeaderClass , changeFilter } from '../store/stay/stay.actions.js'
import { AppFooter } from '../cmps/Stay Layout/AppFooter.jsx'


import house from '../assets/img/top.jpg'
import host from '../assets/img/become-user.jpg'

import tokyo from '../assets/img/tokyo.jpeg'
import santorini from '../assets/img/santorini.jpeg'
import paris from '../assets/img/paris.jpeg'
import cancun from '../assets/img/cancun.jpeg'
import BecomeHost from '../assets/img/become a host.jpeg'


class _HomePage extends React.Component {
    state = {
        class: 'home-header-expanded',
    
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        this.props.changeHeaderClass(this.state.class)
        this.props.loadStays()

    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.listenScrollEvent)
    }


    listenScrollEvent = e => {
        if (window.scrollY > 40) {
            console.log('hi event listener ')
            this.setState({ class: 'app-header' })
            this.props.changeHeaderClass('app-header')
            this.props.changeFilter(true)

        } else {
            this.setState({ class: 'home-header-expanded' })
            this.props.changeHeaderClass('home-header-expanded')
            this.props.changeFilter(false)

        }
    }



    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps.filterBy)
        // console.log('props in home upadte ', this.props.filterBy)
        if (prevProps.filterBy !== this.props.filterBy) {
            this.props.loadStays();
        }
    }

   



    render() {
        const { stays } = this.props
        // console.log('stays from homepage', stays)
        return (
            <section>


                <div className='main-container'>
                    <img className='pic' src='https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=1200' alt="house" style={{ width: '100%' }} />
                    <div className="header-txt-on-banner">Not Sure where to go?.Perfect</div>
                    <Link to={`/explore`}>
                        <button className='btn-flexible'>
                            <span>I'm Flexible</span>
                        </button>
                    </Link>

                </div>

                <section className='home-container'>

                    <h1>Inspiration for your next trip</h1>
                    <section className='card-container'>
                        <div className="ins-image">
                            <img alt="cat" src={tokyo} />
                            <h2>Tokyo</h2>
                        </div>
                        <div className="ins-image">
                            <img  alt="cat" src={santorini} />
                            <h2>Santorini</h2>
                        </div>
                        <div className="ins-image">
                            <img alt="cat" src={paris}/>
                            <h2>Paris</h2>
                        </div>
                        <div className="ins-image">
                            <img  alt="cat" src={cancun} />
                            <h2>Cancun</h2>
                        </div>
                    </section>

                    <h1>Most Popular</h1>
                    <section className="card-container">
                        {stays.slice(0,4).map(stay =>
                            <div className='pop-stay' key={stay._id}>
                                <img className="pop-img" alt="cat" src={stay.imgUrls[0]} />
                                <div className="pop-img">
                                    <h4>{stay.name}</h4>
                                    {/* <p>Price: <span>${stay.price.toLocaleString()}</span></p> */}
                                </div>
                            </div>)
                        }

                    </section>
                </section >

                <div className='banner'>
                    <h1>Become a host</h1>
                    <h3 className="sub-header">Unlock new opportunities by sharing your space.</h3>
                    <h4>Maria<span>Host in Paris</span></h4>
                    <button className='learn-btn'>Become Host</button>
                    <img  className='host-img'src={BecomeHost}  alt="host" />
                </div>
               


                    <AppFooter/>

            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays,
        filterBy: state.stayModule.filterBy,
        classHeader: state.stayModule.classHeader


    }
}

const mapDispatchToProps = {
    loadStays,
    changeHeaderClass,
    changeFilter

}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)

