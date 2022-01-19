import React from 'react';
import { connect } from 'react-redux';
// import { Link, NavLink } from 'react-router-dom';
// import { Route } from 'react-router-dom';

import { stayService } from '../services/stay.services.js';
import { StayGallery } from '../cmps/Stay Details/StayGallery.jsx';



class _StayDetails extends React.Component {
    state = {
        stay: null
    }

    componentDidMount() {
        this.loadStay();
    }

    loadStay = () => {
        const stayId = this.props.match.params;
        stayService.getById(stayId).then((stay) => {
            this.setState({stay});
        });
        console.log(this.state)
    }

    render() {
        
        return (
            <div className="stay-details">
                <section className="stay-header">
                    <div>
                        <h1>Stay Name</h1>
                    </div>
                    <div className="general-info">
                        <span>4.90</span>
                        <button>Reviews</button>
                        <span>Superhost</span>
                        <span>location</span>
                        <button>Share</button>
                        <button>Save</button>
                    </div>
                </section>
                <StayGallery/>
                
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export const StayDetails = connect(mapStateToProps)(_StayDetails)
