import React from 'react'
import { connect } from 'react-redux'

import { loadStays, setFilter, changeHeaderClass  } from '../store/stay/stay.actions.js'
import { Link, NavLink } from 'react-router-dom'
import { HomeFilter } from '../cmps/Stay Layout/HomeFilter.jsx'


import house from '../assets/img/top.jpg'
import img from '../assets/img/2.jpg'




class _HomePage extends React.Component {
    state = {
        class: 'home-header'
    }

    componentDidMount() {
        this.props.changeHeaderClass(this.state.class)
        this.props.loadStays()

    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps.filterBy)
        console.log('props in home upadte ',this.props.filterBy)
        if (prevProps.filterBy !== this.props.filterBy) {
            this.props.loadStays();
        }
    }

    onSetFilter = (filterBy) => {
        console.log('home filterby ',filterBy)
        this.props.setFilter(filterBy);
        setTimeout(()=>{
            this.props.history.push(`/explore?location=${filterBy.location}&dateIn=${filterBy.dateIn}&dateOut=${filterBy.dateOut}&guests=${filterBy.guests}`)

        },1000)
    }



    render() {
        const { stays } = this.props
        // console.log('stays from homepage', stays)
        return (
            <section className='home-container'>
                <HomeFilter onSetFilter={this.onSetFilter} />



                <div className='main-container'>
                    <img className='pic' src={house} alt="house" style={{ maxWidth: '900px' }} />
                    <h1>Not Sure where to go?.Perfect</h1>
                    <Link to={`/explore`}>
                        <button className='btn-flexible'>
                            <span>I'm Flexible</span>
                        </button>
                    </Link>

                </div>

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
                    {stays.map(stay =>
                        <div className='card-stay card' key={stay._id}>
                            <img className="cat-image" alt="cat" src={img} />
                            <div className="cat-tag">
                                <h4>{stay.name}</h4>
                                <p>Price: <span>${stay.price.toLocaleString()}</span></p>
                            </div>
                        </div>)
                    }

                </section>
            </section >
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
    setFilter,
    changeHeaderClass

}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)

