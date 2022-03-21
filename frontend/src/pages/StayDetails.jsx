import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

// import { Link, NavLink } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import { loadStays, changeHeaderClass } from '../store/stay/stay.actions.js'
import { stayService } from '../services/stay.services.js';
// import { reviewService } from '../services/review.services.js';
import { StayGallery } from '../cmps/Stay Details/StayGallery.jsx';
import { StayInfo } from '../cmps/Stay Details/StayInfo.jsx';
import { StayReview } from '../cmps/Stay Details/StayReview.jsx';
import { AddReview } from '../cmps/Stay Details/AddReview.jsx';
import { StayMap } from '../cmps/Stay Details/StayMap.jsx';
import { HostInfo } from '../cmps/Stay Details/HostInfo.jsx';
import { AppFooter } from '../cmps/Stay Layout/AppFooter.jsx'
import { LoginModal } from '../cmps/shared/LoginModal'
import { ReactComponent as Star } from '../assets/svg/star.svg'
import share from '../assets/svg/share.jpg';
import like from '../assets/svg/like.png';
import { BallTriangle } from  'react-loader-spinner'


class _StayDetails extends React.Component {
    state = {
        stay: null,
        class: 'details-header',
        // reviews: [],
    }

    // componentWillMount() {
    //     // this.props.changeHeaderClass(this.state.class)
    // }
    
    
    
    componentDidMount() {
        this.props.changeHeaderClass(this.state.class)
        this.loadStay();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.listenScrollEvent);
        window.scrollTo(0, 0);
        
    }

    loadStay = () => {
        const { stayId } = this.props.match.params;
        stayService.getById(stayId).then((stay) => {
            this.setState({stay});
        });
    }

    addReview = (review) => {
        review.created = Date.now()
        let reviews = [...this.state.stay.reviews, review]
        this.state.stay.reviews.push(review)
        console.log(this.state.stay)
        // reviewService.add(review)
        this.setState((prev) => {
            return { stay: { ...prev.stay, reviews } }
        })
    }
    
    

    render() {
        const { stay } = this.state;
        const {filterBy} =this.props
        // console.log(filterBy)
        if (!stay) return <div className='loader'><BallTriangle color="#FF385C" height={110} width={110} /> </div>
        const  {reviews}  = stay;
        // console.log(reviews)
        let headerReviews = (reviews?.length === 1 ) ? `${reviews?.length} Review` : `${reviews?.length} Reviews`;
        if(reviews?.length === 0) headerReviews = `No reviews`;

        return (
            
            <section className='main-layout-res'>
                <div className="user-modal hidden">
                    <LoginModal/>
                </div>
                <section className="details-container">
                
                    <section className="stay-header">
                        <h1 className="stay-name">
                            {stay.name}
                        </h1>
                        <div className="general-info fl sp">
                            <span className="mainName-info fl wr">
                            <span className='dot'><Star/></span>
                            <span className='dot b'>{stay.rank}</span>
                            <span className='dot'>·</span>
                            <span><button className="details-btn" type="button">  <a className="ab" href="#stayreview">{headerReviews}</a></button></span>
                            <span className='dot'>·</span>
                            <span><button className="details-btn g" type="button"><a className="ag" href="#staymap">{stay.location.address}</a></button></span>
                            </span>
                            <div>
                            <span className="g"><button className="g"><span><img className="share"src={share} alt="" /></span> Share</button></span>
                            <span className="g"><button className="g"><span><img className="like"src={like} alt="" /></span> Save</button></span>
                            </div>
                        </div>
                    </section>
                <StayGallery stay = {stay}/>
                <StayInfo filterBy={filterBy} stay = {stay}/>
                <StayReview stay = {stay}/>
                <AddReview addReview={this.addReview}/>
                <StayMap stay = {stay}/>
                <HostInfo stay = {stay}/>
            </section>
                <AppFooter/>
                    
            </section>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        filterBy: state.stayModule.filterBy,

    }
}

const mapDispatchToProps = {
    changeHeaderClass
    
}

export const StayDetails = connect(mapStateToProps, mapDispatchToProps)(_StayDetails)
