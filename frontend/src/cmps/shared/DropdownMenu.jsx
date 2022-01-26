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
    loggedInUser: null,
    isAdmin: null,
  };

  componentDidMount(){
    this.setState({ loggedInUser: userService.getLoggedinUser()});
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
      if(this.state.loggedInUser) {
        document.querySelector('opt2').classList.remove('hidden');
        document.querySelector('opt1').classList.add('hidden');
      }
      if(this.state.isAdmin === true) {
        document.querySelector('opt2.opt3').classList.remove('hidden');
        document.querySelector('opt1').classList.add('hidden');
      } 
      
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
            <li className="opt1">
            <button className="menu-opt"onClick={()=>this.openLoginModal()}>Login / Sign up</button>
            </li>
            <li className="opt2 hidden">
              <button className="menu-opt" href="#">Messages</button>
            </li>
            <li className="opt2 hidden">
            <Link to={`/trips`}><button className="menu-opt">Trips</button></Link>
            </li>
            <li className="opt1 opt3 hidden">
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
