import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
export default function GetStarted() {
  return (
    <div className="ready-container">
      <h1 className="ready-title">Ready to get started?</h1>
      <Link to="/contact" className="contact-link">
        contact us
      </Link>
    </div>
  );
}
