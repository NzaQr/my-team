import React from "react";
import "./Header.css";
import Logo from "../assets/logo.svg";
export default function Header() {
  return (
    <div className="header-container">
      <img className="logo" src={Logo} alt="myteam logo" />
      <h1>Hello world</h1>
    </div>
  );
}
