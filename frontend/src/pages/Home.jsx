import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { userService } from "../services/user.services";
import {
  loadStays,
  changeHeaderClass,
  changeFilter,
  setFilter,
} from "../store/stay/stay.actions.js";
import { loadOrders } from "../store/order/order.actions.js";
import { AppFooter } from "../cmps/Stay Layout/AppFooter.jsx";

import tokyo from "../assets/img/tokyo.jpeg";
import santorini from "../assets/img/santorini.jpeg";
import paris from "../assets/img/paris.jpeg";
import cancun from "../assets/img/cancun.jpeg";

class _HomePage extends React.Component {
  state = {
    class: "home-header-expanded",
    filterBy: {
      city: "",
    },
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
    this.props.changeHeaderClass(this.state.class);
    console.log(this.props.user);
    this.props.loadStays();
    this.props.loadOrders()
    // this.loggedInUser();
  }

  // loggedInUser = () => {
  //     console.log('hi')
  //   let user = userService.getLoggedinUser();
  //   if (!user)
  //     user = {
  //       _id: "u101",
  //       fullname: "Puki",
  //       imgUrl: [
  //         "https://res.cloudinary.com/kitsunex3/image/upload/v1643195687/Airbnb%20clone/Avatars/avatar1_nogjgo.png",
  //       ],
  //       isAdmin: false,
  //       username: "user1",
  //       password: "muki",
  //     };
  //     userService.login(user.username, user.password);
  //     console.log('login')
  // };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filterBy !== this.props.filterBy) {
      this.props.loadStays();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent);
    window.scrollTo(0, 0);
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 40) {
      this.setState({ class: "app-header" });
      this.props.changeHeaderClass("app-header");
      this.props.changeFilter(true);
    } else {
      this.setState({ class: "home-header-expanded" });
      this.props.changeHeaderClass("home-header-expanded");
      this.props.changeFilter(false);
    }
  };

  onStayClicked = (stayId) => {
    this.props.history.push(`/details/${stayId}`);
  };

  onSetLocation = (city) => {
    const { filterBy } = this.state;
    filterBy.city = city;
    console.log(this.state.filterBy);
    this.setState({ filterBy });
    this.onSetFilter();
  };

  onSetFilter = () => {
    const { filterBy } = this.state;
    console.log(filterBy);
    this.props.setFilter(filterBy);
    setTimeout(() => {
      this.props.history.push(`/explore?location=${filterBy.city}`);
    }, 1000);
  };

  render() {
    const { stays } = this.props;
    return (
      <section>
        <div className="main-container">
          <img
            className="pic"
            src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=1200"
            alt="house"
            style={{ width: "100%" }}
          />
          <div className="header-txt-on-banner">
            Not Sure where to go? Perfect.
          </div>
          <Link to={`/explore`}>
            <button className="btn-flexible">
              <span>I'm Flexible</span>
            </button>
          </Link>
        </div>

        <section className="home-container">
          <h1>Inspiration for your next trip</h1>
          <section className="card-container">
            <div
              className="ins-image"
              onClick={() => this.onSetLocation("Tokyo")}
            >
              <img alt="cat" src={tokyo} />
              <h2>Tokyo</h2>
            </div>
            <div
              className="ins-image"
              onClick={() => this.onSetLocation("Santorini")}
            >
              <img alt="cat" src={santorini} />
              <h2>Santorini</h2>
            </div>
            <div
              className="ins-image"
              onClick={() => this.onSetLocation("Paris")}
            >
              <img alt="cat" src={paris} />
              <h2>Paris</h2>
            </div>
            <div
              className="ins-image"
              onClick={() => this.onSetLocation("Cancun")}
            >
              <img alt="cat" src={cancun} />
              <h2>Cancun</h2>
            </div>
          </section>

          <h1>Most Popular</h1>
          <section className="card-container">
            {stays.slice(0, 4).map((stay) => (
              <div
                className="pop-stay"
                key={stay._id}
                onClick={() => this.onStayClicked(stay._id)}
              >
                <img className="pop-img" alt="cat" src={stay.imgUrls[0]} />
                <div className="pop-img">
                  <h4>{stay.name}</h4>
                </div>
              </div>
            ))}
          </section>
        </section>

        <div className="banner">
          <div className="banner-header">
            Unlock new opportunities by sharing your space.
          </div>
          <div className="banner-txt-botton">
            Maria <span>Host in Paris</span>
          </div>
          <button className="learn-btn">Become Host</button>
          <div
            className="banner-host-img"
            style={{
              "--image-url":
                "url(https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/96ca588b00a846596f43a0576cd7aa4d-1590415939014/Banners_LIHP_Book_eBook_Store.jpg);",
            }}
          />
        </div>

        <AppFooter />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    stays: state.stayModule.stays,
    filterBy: state.stayModule.filterBy,
    classHeader: state.stayModule.classHeader,
    user: state.userModule.user,
  };
}

const mapDispatchToProps = {
  loadStays,
  changeHeaderClass,
  changeFilter,
  setFilter,
  loadOrders
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);
