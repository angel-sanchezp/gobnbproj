import { Component, createRef } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'


// const defaultComponent = () => null

export class SearchModal extends Component {
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

    handleScroll(event) {
        if (window.scrollY > 40) {
        // if(event.deltaY >= 0){
            // this.handleClickOutside()
            this.props.onCloseModal()
        }
    }

    render(){
        // const PreviewComponent = PREVIEW_COMPONENTS[this.props.note.type] || defaultComponent
        return (
            <div className="modal-container">
                <div className="modal">
                    <div className="filters-wrapper" ref={this.wrapperRef}>
                        <HomeFilter/>
                    </div> 
                </div>
            </div>
        )
    }
}