import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { logout } from "../../store/user/user.actions.js"

import { userService } from "../../services/user.services";
import UserAvatar from "../../assets/user-icon.png";
import { ReactComponent as Burger } from "../../assets/svg/burger.svg";
// import { ReactComponent as UserAvatar } from '../../assets/svg/user.svg'
import { logout } from "../../store/user/user.actions";
// import { render } from "sass";

export class _DropdownMenu extends React.Component {
  state = {
    isActive: false,
    loggedInUser: null,
    isAdmin: false,
    isLoggedOut: null,
  };


  componentDidMount(){
    
    console.log(this.state.isLoggedOut)
    if(this.state.loggedInUser) {
    this.setState(prev => ({ ...prev, isLoggedOut: true }))

  } else {
    console.log(this.state.isLoggedOut)
    this.setState(prev => ({ ...prev, isLoggedOut: false }))
  }
};


  openLoginModal = () => {
    document.querySelector(".user-modal").classList.remove("hidden");
    document.querySelector(".dark-screen").classList.remove("hidden");
  };


    // const isActive = false
     onHandelNav = () => {
       this.setState(prev => ({ ...prev, isActive: !this.state.isActive }))
    }

    onLogOut = () => {
      console.log('log out', this.state.isLoggedOut)
      // console.log(this.props)
      // this.props.logout()
      this.setState(prev => ({ ...prev, isLoggedOut: true }))
      console.log('log out', this.state.isLoggedOut)
      // window.location = "/";
    }
    
  
  
    render() {
      let avatar = UserAvatar;
      const {loggedInUser} = this.state;
      console.log(this.props.user)
      if(this.props.user) {
        console.log(this.props.user)
        document.querySelectorAll(".opt2").forEach(e=>{e.classList.remove("hidden");});
        document.querySelectorAll(".opt1").forEach(e=>{e.classList.add("hidden");});
        avatar = this.props.imgUrl;
      }
      if(this.state.isAdmin === true) {
        document.querySelectorAll(".opt2").forEach(e=>{e.classList.remove("hidden");});
        document.querySelectorAll(".opt3").forEach(e=>{e.classList.remove("hidden");});
        document.querySelectorAll(".opt1").forEach(e=>{e.classList.add("hidden");});
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
            <li className="opt2 hidden">
              <button className="menu-opt">Messages</button>
            </li>
            <li className="opt2 hidden">
            <Link to={`/trips`}><button className="menu-opt">Trips</button></Link>
            </li>
            <li className="opt3 hidden">
            <Link to={`/dashboard`}><button className="menu-opt">Dashboard</button></Link>
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
}

export const DropdownMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(_DropdownMenu)