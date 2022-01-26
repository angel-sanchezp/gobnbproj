import React, { useRef } from "react";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { NavLink } from 'react-router-dom'
// import { useDetectOutsideClick } from "./useDetectOutsideClick.jsx";
import UserAvatar from '../../assets/user-icon.png';
import { ReactComponent as Burger } from '../../assets/svg/burger.svg'
// import { ReactComponent as UserAvatar } from '../../assets/svg/user.svg'
import { logout } from '../../store/user/user.actions'
import { render } from "sass";


export  class DropdownMenu extends React.Component {
    state = {
      isActive: false
    }

    // componentDidMount() {
    //   window.addEventListener("click" , this.onHandleNav);
    // }

    openLoginModal = () => {
        document.querySelector(".user-modal").classList.remove("hidden")
        document.querySelector(".dark-screen").classList.remove("hidden");
    }

    onHandleClick = (target) => {
      console.log('hi')
      this.history.push(`/${target}`)
    }
     onHandelNav = () => {
      this.setState(prev => ({ ...prev, isActive: !this.state.isActive }))
      if(this.state.isActive){
        window.addEventListener("click");
        document.querySelector('menu').classList.add('inactive');
        document.querySelector('menu').classList.remove('active');
      } else {
        console.log('hi')
        window.removeEventListener("click");
        document.querySelector('menu').classList.add('active')
        document.querySelector('menu').classList.remove('inactive')
      }
    }

  
    render() {
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
          className={`menu ${this.state.isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
            <button className="menu-opt"onClick={()=>this.openLoginModal()}>Login / Sign up</button>
            </li>
            <li>
              <button className="menu-opt" href="#">Messages</button>
            </li>
            <li>
              <button className="menu-opt" onClick={()=>this.onHandleClick('trips')}>Trips</button>
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

