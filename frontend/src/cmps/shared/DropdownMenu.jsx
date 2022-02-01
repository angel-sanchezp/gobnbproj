import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import UserAvatar from "../../assets/user-icon.png";
import Avatar from "../../assets/svg/avatar.png";
import { ReactComponent as Burger } from "../../assets/svg/burger.svg";
import { logout, login } from "../../store/user/user.actions";
export class _DropdownMenu extends React.Component {
  state = {
    isActive: false,
    loggedInUser: null,
    isAdmin: false,
    isLoggedOut: null,
    isDemo: false
  };
  componentDidMount(){
    if(this.props.user){
      this.setState(prev => ({ ...prev, loggedInUser: this.props.user }))
    }
};
  openLoginModal = () => {
    this.onHandelNav()
    document.querySelector(".user-modal").classList.remove("hidden");
    document.querySelector(".dark-screen").classList.remove("hidden");
  };

    onHandelNav = () => {
       this.setState(prev => ({ ...prev, isActive: !this.state.isActive }))
    }
    onLogOut = () => {
      this.props.logout()
      this.setState(prev => ({ ...prev, isActive: false, isLoggedOut: true }))
    }
    onDemoUser = () => {
      this.onHandelNav()
      const credentials = {
        username: "Guest",
        password: "guest1234",
        imgUrl: "https://res.cloudinary.com/kitsunex3/image/upload/v1643692556/Airbnb%20clone/Avatars/Screenshot_2022-02-01_071541_k2bkp5.png"
      }
      this.props.login(credentials)
      this.setState(prev => ({...prev, isDemo: !this.state.isDemo}))
      console.log(this.state.isDemo)
      // window.location.href = `/`
    }
    render() {
      let avatar = UserAvatar;
      const {loggedInUser} = this.state;
      if(this.props.user) {
        document.querySelectorAll(".opt2").forEach(e=>{e.classList.remove("hidden");});
        document.querySelectorAll(".opt1").forEach(e=>{e.classList.add("hidden");});
        avatar = this.props.user.imgUrl;
        if(!this.props.user.imgUrl) avatar = Avatar;
        if(this.props.user.fullname === 'Guest') avatar = "https://res.cloudinary.com/kitsunex3/image/upload/v1643692556/Airbnb%20clone/Avatars/Screenshot_2022-02-01_071541_k2bkp5.png"
      }
      if(this.state.isAdmin === true) {
        document.querySelectorAll(".opt2").forEach(e=>{e.classList.remove("hidden");});
        document.querySelectorAll(".opt3").forEach(e=>{e.classList.remove("hidden");});
        document.querySelectorAll(".opt1").forEach(e=>{e.classList.add("hidden");});
      }
      if(this.state.isLoggedOut === true) {
        document.querySelectorAll(".opt2").forEach(e=>{e.classList.add("hidden");});
        document.querySelectorAll(".opt3").forEach(e=>{e.classList.add("hidden");});
        document.querySelectorAll(".opt1").forEach(e=>{e.classList.remove("hidden");});
      }
  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={()=> this.onHandelNav()} className="menu-trigger">
          <span><Burger/></span>
          <img className="menu-img"
            src={avatar}
            alt="User avatar"
          />
        </button>
        <nav
          className={`menu ${this.state.isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li className="opt1">
            <button className="menu-opt"onClick={()=>this.openLoginModal()}>Login / Sign up</button>
            </li>
            <li className="opt1">
            <button className="menu-opt"onClick={()=>this.onDemoUser()}>Demo user</button>
            </li>
            <li className="opt2 hidden">
              <button className="menu-opt">Messages</button>
            </li>
            <li className="opt2 hidden">
            <Link to={`/trips`}><button className="menu-opt" onClick={()=>this.onHandelNav()}>Trips</button></Link>
            </li>
            <li className="opt2 hidden">
            <Link to={`/dashboard`}><button className="menu-opt" onClick={()=>this.onHandelNav()}>Dashboard</button></Link>
            </li>
            <li className="opt2 hidden">
              <button className="menu-opt" onClick={()=> this.onLogOut()}>Log Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      user: state.userModule.user,
  }
}
const mapDispatchToProps = {
  logout,
  login
}
export const DropdownMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(_DropdownMenu)