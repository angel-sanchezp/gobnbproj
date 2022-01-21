import React from 'react'
import { connect } from 'react-redux'

import { loadStays,  changeHeaderClass , changeFilter } from '../store/stay/stay.actions.js'
import { Link, NavLink } from 'react-router-dom'

import{AppFooter} from '../cmps/Stay Layout/AppFooter.jsx'

import house from '../assets/img/top.jpg'
import host from '../assets/img/become-user.jpg'
import img from '../assets/img/2.jpg'




class _HomePage extends React.Component {
    state = {
        class: 'home-header-expanded',
    
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        this.props.changeHeaderClass(this.state.class)
        this.props.loadStays()

    }

<<<<<<< HEAD
    
=======
    componentWillUnmount(){
        window.removeEventListener('scroll', this.listenScrollEvent)
    }
>>>>>>> 081b93c83af4eba1710719003f7079cbb14eed60


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
                    <img className='pic' src={house} alt="house" style={{ maxWidth: '900px' }} />
                    <h1>Not Sure where to go?.Perfect</h1>
                    <Link to={`/explore`}>
                        <button className='btn-flexible'>
                            <span>I'm Flexible</span>
                        </button>
                    </Link>

                </div>

                <section className='home-container'>

                    <h1>Inspiration for your next trip</h1>
                    <section className='card-container'>
                        <div>
                            <img className="ins-image" alt="cat" src="https://a0.muscache.com/im/pictures/f68325f9-4661-4452-b15e-fce0da4fb2aa.jpg?im_q=highq&im_w=720" />
                        </div>
                        <div>
                            <img className="ins-image" alt="cat" src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_q=highq&im_w=720" />
                        </div>
                        <div>
                            <img className="ins-image" alt="cat" src="https://a0.muscache.com/im/pictures/f1efe9b6-fac0-462e-ad2c-a7ae670be45e.jpg?im_q=highq&im_w=720" />
                        </div>
                        <div>
                            <img className="ins-image" alt="cat" src="https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_q=highq&im_w=720" />
                        </div>
                    </section>

                    <h1>Most Popular</h1>
                    <section className="card-container">
                        {stays.slice(0, 4).map(stay =>
                            <div className='card-stay card' key={stay._id}>
                                <img className="explore-card-image" alt="cat" src={stay.imgUrls[0]} />
                                <div className="cat-tag">
                                    <h4>{stay.type}</h4>
                                    {/* <p>Price: <span>${stay.price.toLocaleString()}</span></p> */}
                                </div>
                            </div>)
                        }

                    </section>
                    <h1>Top Rated</h1>
                    <section className="card-container">
                        {stays.slice(4, 8).map(stay =>
                            <div className='card-stay card' key={stay._id}>
                                <img className="explore-card-image" alt="cat" src={stay.imgUrls[0]} />
                                <div className="cat-tag">
                                    <h4>{stay.type}</h4>
                                    {/* <p>Price: <span>${stay.price.toLocaleString()}</span></p> */}
                                </div>
                            </div>)
                        }

                    </section>
                </section >

                <div className='banner'>
                    <h1 className="title-become-host">Become a host</h1>
                    <h4 className="sub-header">Unlock new opportunities by sharing your space.</h4>
                    <button className='learn-btn'>Become Host</button>
                    <img  className='host-img'src={host}  alt="host" />
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

