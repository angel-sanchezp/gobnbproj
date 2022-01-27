import { connect } from 'react-redux'
import React from 'react'
import { withRouter } from "react-router-dom"

import {Calendar} from '../FilterCmps/Calendar.jsx'





class _StayDates extends React.Component {
    

    onSetDate=(date)=>{
    //   console.log(date)
    }

    render(){

        return (
            <section className="stay-dates-container">
                <h2>Select check-in date</h2>
                <p>Add your travel dates for exact pricing</p>
                <div className="select-dates">
                <Calendar onSetDate={this.onSetDate} filterBy={this.props.filterBy} />
                </div>
    
            </section>
        )

    }
}
function mapStateToProps(state) {
    // console.log('state from home', state)
    return {
        filterBy: state.stayModule.filterBy,

    }
}
const mapDispatchToProps = {


}
export const StayDates = connect(mapStateToProps, mapDispatchToProps)(withRouter(_StayDates))

