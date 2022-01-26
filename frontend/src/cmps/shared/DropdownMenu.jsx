import React, { useRef } from "react";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import { useDetectOutsideClick } from "./useDetectOutsideClick.jsx";
import UserAvatar from '../../assets/user-icon.png';
import { ReactComponent as Burger } from '../../assets/svg/burger.svg'
// import { ReactComponent as UserAvatar } from '../../assets/svg/user.svg'
import { logout } from '../../store/user/user.actions'


export  function DropdownMenu() {

    function openLoginModal ()  {
        document.querySelector(".user-modal").classList.remove("hidden")
        document.querySelector(".dark-screen").classList.remove("hidden");
    }

    const onLogOut = () => {
      
    }

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span><Burger/></span>
          <img className="menu-img"
            src={UserAvatar}
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
            <button className="menu-opt"onClick={openLoginModal}>Login / Sign up</button>
            </li>
            <li>
              <button className="menu-opt" href="#">Messages</button>
            </li>
            <li>
              <button className="menu-opt" >Trips</button>
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

