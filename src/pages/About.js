import React from "react";
import "./About.css";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import Directors from "../components/Directors";
import Clients from "../components/Clients";
import data from "../data";

export default function About() {
  const directors = data[2].directors.map((item) => (
    <Directors key={item.name} director={item} />
  ));

  const clients = data[3].clients.map((item) => (
    <Clients key={item.name} client={item} />
  ));

  return (
    <React.Fragment>
      <div className="about-title-container">
        <h1 className="about-title">About</h1>
        <p className="about-title-description">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </div>
      <div className="directors-section">
        <h1 className="directors-title">Meet the directors</h1>
        <div className="directors-component">{directors}</div>
      </div>
      <div className="clients-section">
        <div>
          <h1 className="clients-title">Some of our clients</h1>
        </div>
        <div className="clients-component">{clients}</div>
      </div>
      <GetStarted />
      <Footer />
    </React.Fragment>
  );
}
