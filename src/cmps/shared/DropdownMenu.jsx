import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick.jsx";
import UserAvatar from '../../assets/user-icon.png';
import { ReactComponent as Burger } from '../../assets/svg/burger.svg'
// import { ReactComponent as UserAvatar } from '../../assets/svg/user.svg'


export function DropdownMenu() {

    function openLoginModal ()  {
        document.querySelector(".user-modal").classList.remove("hidden")
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
              <button className="menu-opt" href="#">Trips</button>
            </li>
            <li>
              <button className="menu-opt" href="#">Dashboard</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}