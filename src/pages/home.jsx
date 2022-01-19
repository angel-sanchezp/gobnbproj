import React from 'react'
import { connect } from 'react-redux'



class _HomePage extends React.Component {
    state = {}

    render() {
        // const { count } = this.props
        return (
            <section>
                <h1>Home page</h1>
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export const HomePage = connect(mapStateToProps)(_HomePage)

