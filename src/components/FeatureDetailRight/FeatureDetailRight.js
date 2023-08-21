import React from "react";
import "./FeatureDetailRight.scss";
import Button from "../Button/Button";
import telementry from "../../assets/images/telemetry.jpg";
import arrow from "../../assets/patterns/right-arrow.svg";

const FeatureDetailRight = () => {
  return (
    <div className="detail">
      <div className="left">
        <h1>Easy to use riding telementry</h1>
        <p>
          The Scoot app is available with riding telemetry. This means it can
          show you your average speed, how long you've been using the scooter,
          your traveling distance, and many more things all in an easy to use
          app.
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="right">
        <img src={telementry} alt="" />
      </div>
    </div>
  );
};

export default FeatureDetailRight;
