import React from "react";
import "./FeatureDetailLeft.scss";
import Button from "../Button/Button";
import wilderness from "../../assets/images/near-you.jpg";
import arrow from "../../assets/patterns/right-arrow.svg";

const FeatureDetailLeft = () => {
  return (
    <div className="detail-left">
      <div className="left">
        <img src={wilderness} alt="" />
      </div>
      <div className="right">
        <h1>Coming to a city near you</h1>
        <p>
          Scoot is available in 4 major cities so far. We’re expanding rapidly,
          so be sure to let us know if you want to see us in your hometown.
          We’re aiming to let our scooters loose on 23 cities over the coming
          year.
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default FeatureDetailLeft;
