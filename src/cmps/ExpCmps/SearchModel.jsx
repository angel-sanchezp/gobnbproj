import { Component } from 'react'
import { connect } from 'react-redux'

import { HomeFilter } from '../Stay Layout/HomeFilter.jsx'


// const defaultComponent = () => null

export class SearchModal extends Component {
    render(){
        // const PreviewComponent = PREVIEW_COMPONENTS[this.props.note.type] || defaultComponent
        return (
            <div className="modal-container">
                <div className="modal">
                    <div className="filters-wrapper"><HomeFilter/> </div> 
                </div>
            </div>
        )
    }
}