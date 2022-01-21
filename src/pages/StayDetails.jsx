import React from 'react';
import { connect } from 'react-redux';
// import { Link, NavLink } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import { loadStays, changeHeaderClass } from '../store/stay/stay.actions.js'
import { stayService } from '../services/stay.services.js';
import { StayGallery } from '../cmps/Stay Details/StayGallery.jsx';
import { StayInfo } from '../cmps/Stay Details/StayInfo.jsx';
import { StayMap } from '../cmps/Stay Details/StayMap.jsx';
import { StayAmenities } from '../cmps/Stay Details/StayAmenities.jsx';
import { HostInfo } from '../cmps/Stay Details/HostInfo.jsx';



class _StayDetails extends React.Component {
    state = {
        stay: null,
        // class: 'explore-header'
    }

    componentDidMount() {
        // this.props.changeHeaderClass(this.state.class)
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
        // const { location } = this.state.location
        if (!stay) return <h1>Loading...</h1>
        return (
            <section className="details-container">
                
                <section className="stay-header">
                    <h1 className="stay-name">
                        {stay.name}
                    </h1>
                    <div className="general-info">
                        <span className="mainName-info">
                        {/* <span>{stay.rate}</span> */}
                        <span><button className="details-btn" type="button">Reviews</button></span>
                        {/* <span className='dot'>.</span> */}
                        {/* <span className="g">Superhost</span> */}
                        <span className='dot'>.</span>
                        <span><button className="details-btn g" type="button">{stay.location.address}</button></span>
                        </span>
                        <div>
                        <span className="g"><button >Share</button></span>
                        <span className="g"><button >Save</button></span>
                        </div>
                    </div>
                </section>
                <StayGallery stay = {stay}/>
                <StayInfo stay = {stay}/>
                <StayAmenities stay = {stay}/>
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
    // changeHeaderClass
    
}

export const StayDetails = connect(mapStateToProps, mapDispatchToProps)(_StayDetails)
