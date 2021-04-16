import React from "react";

export default function HomeFeatures({ feature: { img, title, description } }) {
  return (
    <div>
      <img className="icon" src={img} alt="icon" />
      <h3 className="features-title">{title}</h3>
      <p className="features-description">{description}</p>
    </div>
  );
}
