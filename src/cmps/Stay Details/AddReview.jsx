import { Component } from 'react'
import { userService } from '../../services/user.services.js'
// import GuestUserImg from "https://res.cloudinary.com/kitsunex3/image/upload/v1643031396/Airbnb%20clone/Users/GuestUser_dynjr7.png";


export class AddReview extends Component {

    state = {
        loggedInUser: null,
        review: {
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
        this.props.addReview(review)
    };

    render() {
        const { review, loggedInUser } = this.state;
        const fullname = (loggedInUser) ? loggedInUser.fullname : 'Guest';

        return (
            <section className="add-review-container">
                <h2>Add Review</h2>
                <div className="add-review-userInfo">
                    <img className="review-user"src="https://res.cloudinary.com/kitsunex3/image/upload/v1643031396/Airbnb%20clone/Users/GuestUser_dynjr7.png"alt="Not found" />
                    <div>
                        <h3>{fullname}</h3> 
                    </div>
                </div>
                <div className = "review-txt-area">
                <textarea
                    placeholder="Write a review about this stay."
                    type="text"
                    name="txt"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={review.txt}
                />
                </div>
                <div className="submit-button-area">
                    <button className = "gradient"onClick={this.onAddReview}>Submit</button>
                </div>
            </section>
        )
    }

}