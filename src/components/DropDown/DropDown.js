import React, { useState } from "react";
import "./DropDown.scss";
import cheveron from "../../assets/icons/chevron.svg";
import Reveal from "../Reveal/Reveal";

const DropDown = (props) => {
  const [isDown, setIsDown] = useState(false);

  const dropDownHandler = () => {
    setIsDown(!isDown);
  };

  return (
    <Reveal>
      <div
        className={isDown ? "dropdown active" : "dropdown"}
        onClick={() => {
          dropDownHandler();
        }}
      >
        <div className="top">
          <h3 className={isDown && "activated"}>{props.heading}</h3>
          <img
            className={isDown ? "normal" : "normal rotate"}
            src={cheveron}
            onClick={dropDownHandler}
            alt=""
          />
        </div>
        <p>{props.value}</p>
      </div>
    </Reveal>
  );
};

export default DropDown;
