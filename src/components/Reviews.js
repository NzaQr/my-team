import React from "react";

export default function Reviews({ review: { story, name, position, img } }) {
  return (
    <div className="review-info-container">
      <p className="story">{story}</p>
      <h3 className="name">{name}</h3>
      <h4 className="position">{position}</h4>
      <img className="face" src={img} alt="icon" />
    </div>
  );
}
