import React from "react";
import "./Home.css";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import featuresData from "../components/featuresData";
import reviewsData from "../components/reviewsData";

export default function Home() {
  const features = featuresData.map((item) => (
    <Features key={item.name} feature={item} />
  ));

  const reviews = reviewsData.map((item) => (
    <Reviews key={item.name} review={item} />
  ));

  return (
    <React.Fragment>
      <div className="title-container">
        <h1 className="title">
          Find the <br /> best <span className="pink">talent</span>
        </h1>
        <p className="title-description">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. <br /> We’re about to change that.
        </p>
      </div>
      <div className="features-container">
        <h2 className="features-header">
          Build & manage distributed teams like no one else.
        </h2>
        <div>{features}</div>
      </div>
      <div className="reviews-container">
        <h2 className="reviews-header">
          Delivering real results for top companies. Some of our{" "}
          <span className="light-blue">success stories.</span>
        </h2>
        <div className="review-component">{reviews}</div>
      </div>
      <GetStarted />
      <Footer />
    </React.Fragment>
  );
}
