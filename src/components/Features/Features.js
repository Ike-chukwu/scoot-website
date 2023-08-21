import React from "react";
import locate from "../../assets/icons/locate.svg";
import scooter from "../../assets/icons/scooter.svg";
import ride from "../../assets/icons/ride.svg";
import "./Features.scss";

const Features = () => {
  return (
    <section className="features">
      <div className="features-icons-pack">
        <img src={locate} alt="" />
        <img src={scooter} alt="" />
        <img src={ride} alt="" />
      </div>

      <div className="features-content">
        <div className="fatures-card">
          <img src={locate} alt="" />
          <h3>Locate with app</h3>
          <p>
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>
        <div className="fatures-card">
          <img src={locate} alt="" />
          <h3>Locate with app</h3>
          <p>
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>
        <div className="fatures-card">
          <img src={locate} alt="" />
          <h3>Locate with app</h3>
          <p>
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
