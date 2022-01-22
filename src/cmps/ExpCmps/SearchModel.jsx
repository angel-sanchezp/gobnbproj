import { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import _ from 'lodash'

import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'

import { setFilter , loadStays } from '../../store/stay/stay.actions.js'



// const defaultComponent = () => null

class _SearchModal extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef = createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('scroll', this.handleScroll);
    }

    
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps.filterBy)
        // console.log('props in home upadte ', this.props.filterBy)
        if (prevProps.filterBy !== this.props.filterBy) {
            this.props.loadStays();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            if (_.isFunction(this.props.onCloseModal)) {
                this.props.onCloseModal()
            }
        }
    }

    onSetFilter = (filterBy) => {
        console.log('home filterby ', filterBy)
        this.props.setFilter(filterBy);
        const { location, dateIn, dateOut, guests = 1 } = filterBy

        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let checkIn = (dateIn.getDay())
        let checkOut = (dateOut.getDay())
        let month = (monthNames[dateOut.getMonth()])


        setTimeout(() => {
            this.props.history.push(`/explore?location=${location}&dateIn=${checkIn}&dateOut=${checkOut}&month=${month}&guests=${guests}`)
        }, 1000)
    }


    handleScroll(event) {
        if (window.scrollY > 40) {
            // if(event.deltaY >= 0){
            // this.handleClickOutside()
            this.props.onCloseModal()
        }
    }

    render() {
        // const PreviewComponent = PREVIEW_COMPONENTS[this.props.note.type] || defaultComponent
        return (
            <div className="modal-container">
                <div className="modal">
                    <div className="filters-wrapper" ref={this.wrapperRef}>
                        <HomeFilter onSetFilter={this.onSetFilter} />
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log('state from home', state)
    return {
        class: state.stayModule.classHeader,
        filterBy: state.stayModule.filterBy,
    }
}
const mapDispatchToProps = {
    setFilter,
    loadStays

}
export const SearchModal = connect(mapStateToProps, mapDispatchToProps)(withRouter(_SearchModal))