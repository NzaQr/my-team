import React from "react";
import "./ContactAsk.css";

export default function ContactAsk({ feature: { img, description } }) {
  return (
    <div className="ask-about-container">
      <div>
        <img className="icon" src={img} alt="icon" />
      </div>
      <h3 className="ask-about">{description}</h3>
    </div>
  );
}
