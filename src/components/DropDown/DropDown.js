import React, { useState } from "react";
import "./DropDown.scss";
import cheveron from "../../assets/icons/chevron.svg";

const DropDown = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [currentId, setCurrentID] = useState();

  const dropDownHandler = () => {
    setIsDown(!isDown);
  };

  return (
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
  );
};

export default DropDown;
