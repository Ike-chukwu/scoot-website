import React from "react";
import "./Map.scss";
import desktopMap from "../../assets/images/world-map-desktop.png";
import tabletMap from "../../assets/images/world-map-tablet.png";
import phoneMap from "../../assets/images/world-map-mobile.png";

const Map = () => {
  return (
    <div className="map">
      <div className="map-cont">
        <img src={desktopMap} className="desktop" alt="" />
        <div className="top-right">Yokohoma</div>
        <div className="bottom-right">Jakarta</div>
        <div className="top-left">London</div>
        <div className="bottom-left">New York</div>
      </div>
      <img src={tabletMap} className="tablet" alt="" />
      <img src={phoneMap} className="mobile" alt="" />
    </div>
  );
};

export default Map;
