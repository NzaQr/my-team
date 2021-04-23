import React from "react";

export default function Features({ feature: { img, title, description } }) {
  return (
    <div className="feature">
      <div>
        <img className="icon" src={img} alt="icon" />
      </div>
      <div>
        <h3 className="features-title">{title}</h3>
        <p className="features-description">{description}</p>
      </div>
    </div>
  );
}
