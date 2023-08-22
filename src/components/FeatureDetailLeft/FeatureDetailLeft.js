import React from "react";
import "./FeatureDetailLeft.scss";
import Button from "../Button/Button";
import wilderness from "../../assets/images/near-you.jpg";
import arrow from "../../assets/patterns/right-arrow.svg";

const FeatureDetailLeft = (props) => {
  return (
    <div className="detail-left">
      <div className="left">
        <img src={props.image} alt="" />
      </div>
      <div className="right">
        <h1>{props.heading}</h1>
        <p>
          {props.paragraph}
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default FeatureDetailLeft;
