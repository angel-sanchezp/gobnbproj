import React from 'react';
import { connect } from 'react-redux';
// import { Link, NavLink } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import { loadStays, changeHeaderClass } from '../store/stay/stay.actions.js'
import { stayService } from '../services/stay.services.js';
import { StayGallery } from '../cmps/Stay Details/StayGallery.jsx';
import { StayInfo } from '../cmps/Stay Details/StayInfo.jsx';
import { StayReview } from '../cmps/Stay Details/StayReview.jsx';
import { StayMap } from '../cmps/Stay Details/StayMap.jsx';
import { HostInfo } from '../cmps/Stay Details/HostInfo.jsx';



class _StayDetails extends React.Component {
    state = {
        stay: null,
        class: 'details-header'
    }

    componentWillMount() {
        this.props.changeHeaderClass(this.state.class)
    }

    componentDidMount() {
        this.loadStay();
    }

    loadStay = () => {
        const { stayId } = this.props.match.params;
        stayService.getById(stayId).then((stay) => {
            this.setState({stay});
        });
    }

    render() {
        const { stay } = this.state;
        if (!stay) return <h1>Loading...</h1>
        const  {reviews}  = stay;
        const headerReviews = (reviews.length === 1 ) ? `${reviews.length} Review` : `${reviews.length} Reviews`;

        return (
            <section className="details-container">
                
                <section className="stay-header">
                    <h1 className="stay-name">
                        {stay.name}
                    </h1>
                    <div className="general-info">
                        <span className="mainName-info">
                        {/* <span>{stay.rate}</span> */}
                        <span><button className="details-btn" type="button"><a className="ab" href="#stayreview">{headerReviews}</a></button></span>
                        {/* <span className='dot'>.</span> */}
                        {/* <span className="g">Superhost</span> */}
                        <span className='dot'>.</span>
                        <span><button className="details-btn g" type="button"><a className="ag" href="#staymap">{stay.location.address}</a></button></span>
                        </span>
                        <div>
                        <span className="g"><button >Share</button></span>
                        <span className="g"><button >Save</button></span>
                        </div>
                    </div>
                </section>
                <StayGallery stay = {stay}/>
                <StayInfo stay = {stay}/>

                <StayReview stay = {stay}/>
                <StayMap stay = {stay}/>
                <HostInfo stay = {stay}/>
                    
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

const mapDispatchToProps = {
    changeHeaderClass
    
}

export const StayDetails = connect(mapStateToProps, mapDispatchToProps)(_StayDetails)
