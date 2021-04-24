import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Director.css";

export default function Directors({
  director: { img, name, position, description },
}) {
  const [flip, setFlip] = useState(false);
  return (
    <div className="director">
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front">
          <img className="director-img" src={img} alt="director" />
          <h3 className="director-name">{name}</h3>
          <p className="director-position">{position}</p>
        </div>
        <div className="back">
          <h3 className="director-name-back">{name}</h3>
          <p className="director-description">{description}</p>
          <a className="social-icon" href="https://twitter.com">
            <AiIcons.AiOutlineTwitter />
          </a>
          <a className="social-icon" href="https://www.linkedin.com">
            <AiIcons.AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
