import React from "react";
import "./FeatureDetailRight.scss";
import Button from "../Button/Button";
import Reveal from "../Reveal/Reveal";

const FeatureDetailRight = (props) => {
  return (
    <div className="detail">
      <div className="left">
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
      <div className="right">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default FeatureDetailRight;
