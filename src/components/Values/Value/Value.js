import React from "react";
import "./Value.scss";

const Value = (props) => {
  return (
    <div className="value">
      <div className="img-pack">
        <img src={props.image} alt="" />
        <div className="circle">{props.number}</div>
      </div>
      <h3>{props.heading}</h3>
      <p>
       {props.text}
      </p>
    </div>
  );
};

export default Value;
