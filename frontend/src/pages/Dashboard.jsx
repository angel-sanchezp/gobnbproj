import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import moment from 'moment'
import { AppFooter } from '../cmps/Stay Layout/AppFooter.jsx'
import { StayList } from '../cmps/ExpCmps/StayList.jsx'

import { loadStays, changeHeaderClass } from '../store/stay/stay.actions.js'
import { utilService } from '../services/utils.service'


const HEADER_CLASS = 'explore-header'

class _Dashboard extends Component {


    render() {
        return (
            <section>

                <section className="dashboard-page">
                    <h1>dashboard page</h1>
                </section>
                <AppFooter/>
            </section>
        )
    }
    

}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays,
        filterBy: state.stayModule.filterBy,
        class: state.stayModule.classHeader
    }
}

const mapDispatchToProps = {
    // loadStays,
    changeHeaderClass
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)