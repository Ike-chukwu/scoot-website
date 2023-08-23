import React from "react";
import "./LocationPicture.scss";
import circle from "../../assets/patterns/white-circles.svg";

const LocationPicture = (props) => {
  return (
    <div className="location">
      <img className="placeD" src={props.imageD} alt="" />
      <img className="placeT" src={props.imageT} alt="" />
      <img className="placeM" src={props.imageM} alt="" />
      <div className="inner-location">
        <p className="location">{props.location}</p>
      </div>
        <img src={circle} className="circle" alt="" />
    </div>
  );
};

export default LocationPicture;
