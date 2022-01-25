import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick.jsx";
import UserAvatar from '../../assets/user-icon.png';

export function DropdownMenu() {


  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>User</span>
          <img
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
              <a className="menu-opt" href="#">Messages</a>
            </li>
            <li>
              <a className="menu-opt" href="#">Trips</a>
            </li>
            <li>
              <a className="menu-opt" href="#">Login/ Signup</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}