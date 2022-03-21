import { Component } from 'react'
import { userService } from '../../services/user.services.js'
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export class AddReview extends Component {

    state = {
        loggedInUser: null,
        review: {
            created: 0,
            rate: 5,
            txt: ''
        }
    }

    componentDidMount(){
        this.setState({ loggedInUser: userService.getLoggedinUser()});
    };

    handleChange = ({ target }) => {
        const { value } = target;
        this.setState({ review: { ...this.state.review, txt: value } });
    };

    onAddReview = () => {
        let { loggedInUser, review } = this.state;
        console.log(loggedInUser.imgUrl)
        if (loggedInUser === null) {
            review.by = {
                _id: 'guestId',
                fullname: 'Guest',
                imgUrl: ["https://res.cloudinary.com/kitsunex3/image/upload/v1643031396/Airbnb%20clone/Users/GuestUser_dynjr7.png"]
            }
        } else {
            review.by = {
                _id: loggedInUser._id,
                fullname: loggedInUser.fullname,
                imgUrl: loggedInUser.imgUrl
            }
        }
        console.log(review)
        this.props.addReview(review)
    };

    render() {
        const { review, loggedInUser } = this.state;
        const fullname = (loggedInUser) ? loggedInUser.fullname : 'Guest';
        let avatar = (loggedInUser) ? loggedInUser.imgUrl : "https://res.cloudinary.com/kitsunex3/image/upload/v1643031396/Airbnb%20clone/Users/GuestUser_dynjr7.png";

        return (
            <section className="add-review-container">
                <h2>Add Review</h2>
                <div className="add-review-userInfo">
                    <img className="review-user"src={avatar} alt="Not found" />
                    <div>
                        <h3 className="review-user-name">{fullname}</h3> 
                    </div>
                </div>
                <div className = "review-txt-area">
                <textarea
                    id="reviewBox"
                    placeholder="Write a review about this stay."
                    type="text"
                    name="txt"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={review.txt}
                />
                </div>
                <div className="submit-button-area">
                    <button className = "gradient" onClick={this.onAddReview}>Submit</button>
                </div>
            </section>
        )
    }

}