import React from 'react'
import { connect } from 'react-redux'

import { loadStays } from '../store/stay/stay.actions.js'

import  house  from '../assets/img/6.jpg'



class _HomePage extends React.Component {
    state = {
        // stays:[]
    }

    componentDidMount(){
        this.props.loadStays()
    }

   

    render() {
        const { stays } = this.props
        console.log('stays from homepage',stays)
        return (
            <section  className='home-container'>
                <div className='main-container'>
                <img  className='pic'  src={house} alt="house" style={{maxWidth: '900px'}} />
                <h1>Not Sure where to go?.Perfect</h1>
                
                </div>





                <section>
                {stays.map(stay =>
                        <div className="stay-card" key={stay._id}>
                            <h4>{stay.name}</h4>
                            <p>Price: <span>${stay.price.toLocaleString()}</span></p>
                            <p>Type: <span>{stay.type}</span></p>
                        </div>)
                    }

                </section>
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays
        
    }
}

const mapDispatchToProps = {
    loadStays
    
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)

