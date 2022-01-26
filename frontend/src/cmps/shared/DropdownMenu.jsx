import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import { userService } from "../../services/user.services";
import UserAvatar from "../../assets/user-icon.png";
import { ReactComponent as Burger } from "../../assets/svg/burger.svg";
// import { ReactComponent as UserAvatar } from '../../assets/svg/user.svg'
// import { logout } from "../../store/user/user.actions";
// import { render } from "sass";

export class DropdownMenu extends React.Component {
  state = {
    isActive: false,
    loggedInUser: false,
    isAdmin: false,
  };

//   componentDidMount(){
//     this.setState({ loggedInUser: userService.getLoggedinUser()});
// };


  openLoginModal = () => {
    document.querySelector(".user-modal").classList.remove("hidden");
    document.querySelector(".dark-screen").classList.remove("hidden");
  };


    // const isActive = false
     onHandelNav = () => {
       this.setState(prev => ({ ...prev, isActive: !this.state.isActive }))
    }
    

  
    render() {
      let avatar = UserAvatar;
      const {loggedInUser} = this.state;
      if(loggedInUser) {
        document.querySelectorAll(".opt2").forEach(e=>{e.classList.remove("hidden");});
        document.querySelectorAll(".opt1").forEach(e=>{e.classList.add("hidden");});
        avatar = loggedInUser.imgUrl;
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
              <button className="menu-opt" href="#">Messages</button>
            </li>
            <li className="opt2 hidden">
            <Link to={`/trips`}><button className="menu-opt">Trips</button></Link>
            </li>
            <li className="opt3 hidden">
              <button className="menu-opt" href="#">Dashboard</button>
            </li>
            <li className="opt2 hidden">
              <button className="menu-opt" href="#">Log Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    );
  }
}
