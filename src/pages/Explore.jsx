import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { loadStays } from '../store/stay/stay.actions.js'
import { utilService } from '../services/utils.service'
import { Link } from 'react-router-dom'


function _Explore({ stays  }) {

    // useEffect(() => {
    //     loadStays()
    // },stays)

    
    // const onSelectStay = (stayId) => {
    //     console.log(` ${stay.vendor} to Cart`)
    //     addToCart(car)
    //     showSuccessMsg('Added to Cart')
    // }

    return (
        <section className="explore-page">
            <h1>Explore Page</h1>
                
                <ul className="stay-list">

                {stays.map(stay =>
                    <li className="stay-preview" key={stay._id}>
                        <h4>{stay.name}</h4>
                        <p>Price: <span>${stay.price.toLocaleString()}</span></p>
                        <p>Type: <span>{stay.type}</span></p>
                        <div>{utilService.getRandomIntInclusive(1000, 3000)} kilometers away</div>
                        <Link to={`/details/${stay._id}`}>
                            <button>Pick me</button>
                        </Link>
                    </li>
                )}    

                </ul>
                
            
            
        </section>
    )

}

function mapStateToProps(state) {
    console.log('stays' , state.stayModule.stays)
    console.log(state)
    return {
        stays: state.stayModule.stays
    }
}
const mapDispatchToProps = {
    loadStays
    
}


export const Explore = connect(mapStateToProps, mapDispatchToProps)(_Explore)