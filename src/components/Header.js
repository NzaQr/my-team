import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.svg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo" src={Logo} alt="myteam logo" />
      </Link>
      <div className="nav">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/about">About</Link>
            </li>
            <li className="item contact">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-item-container">
        <Link className="nav-item" to="/about">
          About
        </Link>
        <Link className="nav-item nav-contact" to="/contact">
          Contact us
        </Link>
      </div>
    </div>
  );
}
