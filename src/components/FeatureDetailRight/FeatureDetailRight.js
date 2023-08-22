import React from "react";
import "./FeatureDetailRight.scss";
import Button from "../Button/Button";

const FeatureDetailRight = (props) => {
  return (
    <div className="detail">
      <div className="left">
        <h1>{props.heading}</h1>
        <p>
          {props.paragraph}
        </p>
        <Button>Learn More</Button>
      </div>
      <div className="right">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default FeatureDetailRight;
