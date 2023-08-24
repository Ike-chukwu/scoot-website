import React from "react";
import "./FeatureDetailLeft.scss";
import Button from "../Button/Button";
import Reveal from "../Reveal/Reveal";

const FeatureDetailLeft = (props) => {
  return (
    <div className="detail-left">
      <div className="left">
        <img src={props.image} alt="" />
      </div>
      <div className="right">
        <Reveal>
          <h1>{props.heading}</h1>
        </Reveal>
        <Reveal>
          <p>{props.paragraph}</p>
        </Reveal>
        <Reveal>
          <Button>Learn More</Button>
        </Reveal>
      </div>
    </div>
  );
};

export default FeatureDetailLeft;
