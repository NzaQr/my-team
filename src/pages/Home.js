import React from "react";
import "./Home.css";
import HomeFeatures from "../components/HomeFeatures";
import HomeReviews from "../components/HomeReviews";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import featuresData from "./featuresData";
import reviewsData from "./reviewsData";

export default function Home() {
  const features = featuresData.map((item) => (
    <HomeFeatures key={item.name} feature={item} />
  ));

  const reviews = reviewsData.map((item) => (
    <HomeReviews key={item.name} review={item} />
  ));

  return (
    <div className="content-container">
      <h1 className="title">
        Find the <br /> best <span className="pink">talent</span>
      </h1>
      <p className="title-description">
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent.{" "}
        <br /> We’re about to change that.
      </p>
      <div className="features-container">
        <h2 className="features-header">
          Build & manage distributed teams like no one else.
        </h2>
        {features}
      </div>
      <div className="reviews-container">
        <h2 className="reviews-header">
          Delivering real results for top companies. Some of our{" "}
          <span className="light-blue">success stories.</span>
        </h2>
        {reviews}
      </div>
      <GetStarted />
      <Footer />
    </div>
  );
}
