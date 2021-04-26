import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <div>
          <Link to="/">
            <img className="footer-logo" src={Logo} alt="myteam logo" />
          </Link>
        </div>
        <Link className="footer-link" to="/">
          home
        </Link>
        <Link className="footer-link" to="/about">
          about
        </Link>
      </div>

      <div className="location-info">
        <h3 className="info"> 987 Hillcrest Lane </h3>
        <h3 className="info"> Irvine, CA </h3>
        <h3 className="info"> California 92714 </h3>
        <h3 className="info"> Call Us : 949-833-7432 </h3>
      </div>
      <div className="icons-container">
        <a className="social-icon" href="https://facebook.com">
          <AiIcons.AiFillFacebook />
        </a>
        <a className="social-icon" href="https://pinterest.com">
          <FaIcons.FaPinterest />
        </a>
        <a className="social-icon" href="https://twitter.com">
          <AiIcons.AiOutlineTwitter />
        </a>
        <h3 className="copyright"> Copyright 2021. All Rights Reserved </h3>
      </div>
    </div>
  );
}
