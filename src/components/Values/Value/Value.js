import React from "react";
import "./Value.scss";
import Reveal from "../../Reveal/Reveal";

const Value = (props) => {
  return (
    <Reveal>
      <div className="value">
        <div className="img-pack">
          <Reveal>
            <img src={props.image} alt="" />
          </Reveal>
          <div className="circle">{props.number}</div>
        </div>
        <Reveal>
          <h3>{props.heading}</h3>
        </Reveal>
        <Reveal>
          <p>{props.text}</p>
        </Reveal>
      </div>
    </Reveal>
  );
};

export default Value;
