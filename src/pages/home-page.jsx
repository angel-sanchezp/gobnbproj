// import React from 'react'
// // import {connect} from 'react-redux'



// import { Link } from 'react-router-dom'
// import logo from '../assets/img/bst-logo.jpg'

export class HomePage extends React.Component {
    state = {
    }



    render() {
        return (
            <section className="home-page main-layout">
                <div className="img-container ">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div>
                    <Link className="clean-link" to="/toy">
                        <button className="btn-start-here ">Start Here</button>
                    </Link>
                </div>

                <LoginSignup />

            </section>
        )
    }
}



