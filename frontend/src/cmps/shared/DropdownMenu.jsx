import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import UserAvatar from "../../assets/user-icon.png";
import { ReactComponent as Burger } from "../../assets/svg/burger.svg";
// import { ReactComponent as UserAvatar } from '../../assets/svg/user.svg'
// import { logout } from "../../store/user/user.actions";
// import { render } from "sass";

export class DropdownMenu extends React.Component {
  state = {
    isActive: false,
  };

  openLoginModal = () => {
    document.querySelector(".user-modal").classList.remove("hidden");
    document.querySelector(".dark-screen").classList.remove("hidden");
  };

    // componentDidMount() {
    //   window.addEventListener("click" , this.onHandleNav);
    // }

    // openLoginModal = () => {
    //     document.querySelector(".user-modal").classList.remove("hidden")
    //     document.querySelector(".dark-screen").classList.remove("hidden");
    // }

    // onHandleClick = (target) => {
    //   console.log('hi')
    //   this.history.push(`/${target}`)
    // }
    //  onHandelNav = () => {
    //   this.setState(prev => ({ ...prev, isActive: !this.state.isActive }))
    //   if(this.state.isActive){
    //     window.addEventListener("click");
    //     document.querySelector('menu').classList.add('inactive');
    //     document.querySelector('menu').classList.remove('active');
    //   } else {
    //     console.log('hi')
    //     window.removeEventListener("click");
    //     document.querySelector('menu').classList.add('active')
    //     document.querySelector('menu').classList.remove('inactive')
    //   }
  onHandleClick = (target) => {
    // console.log("hi");
    // this.props.history.push(`/${target}`)
    window.location.href(`/${target}`);
  };

    
    // const isActive = false
     onHandelNav = () => {
       this.setState(prev => ({ ...prev, isActive: !this.state.isActive }))
      // if(this.state.isActive){
      //   window.addEventListener("click", this.onRemoveActive(true));
      // } else  if (!this.state.isActive){
      //   window.removeEventListener("click", this.onRemoveActive(false));
      // }
    }
    
    // onRemoveActive = () => {
      
    //   // if(this.state.isActive){
    //   //   // document.querySelector('menu').classList.add('active');
    //   //   // document.querySelector('menu').classList.remove('inactive');
    //   // } else  {
    //   //   // document.querySelector('menu').classList.remove('active');
    //   //   // document.querySelector('menu').classList.add('inactive');
    //   // }
    // }

  
    render() {
      let isActive = this.state.isActive
  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={()=> this.onHandelNav()} className="menu-trigger">
          <span><Burger/></span>
          <img className="menu-img"
            src={UserAvatar}
            alt="User avatar"
          />
        </button>
        <nav
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
            <button className="menu-opt"onClick={()=>this.openLoginModal()}>Login / Sign up</button>
            </li>
            <li>
              <button className="menu-opt" href="#">Messages</button>
            </li>
            <li>
            <Link to={`/trips`}><button className="menu-opt">Trips</button></Link>
            </li>
            <li>
              <button className="menu-opt" href="#">Dashboard</button>
            </li>
            <li>
              <button className="menu-opt hidden" href="#">Log Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    );
  }
}
