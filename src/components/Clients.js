import React from "react";
import "./Clients.css";

export default function Clients({ client: { img } }) {
  return (
    <div>
      <img className="client-logo" alt="clients logo" src={img} />
    </div>
  );
}
