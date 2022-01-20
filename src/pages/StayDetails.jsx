import React from 'react';
import { connect } from 'react-redux';
// import { Link, NavLink } from 'react-router-dom';
// import { Route } from 'react-router-dom';

import { stayService } from '../services/stay.services.js';
import { StayGallery } from '../cmps/Stay Details/StayGallery.jsx';
import { StayInfo } from '../cmps/Stay Details/StayInfo.jsx';



class _StayDetails extends React.Component {
    state = {
        stay: null
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
        return (
            <section className="details-container">
                
                <section className="stay-header">
                    <div className="stay-name">
                        {stay.name}
                    </div>
                        <div className="general-info">
                        {/* <span>{stay.rate}</span> */}
                        <button>Reviews</button>
                        <span>Superhost</span>
                        <span>{stay.location.address}</span>
                        <button>Share</button>
                        <button>Save</button>
                    </div>
                </section>
                <StayGallery stay = {stay}/>
                <StayInfo stay = {stay}/>
                    
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export const StayDetails = connect(mapStateToProps)(_StayDetails)
