import React from "react";
import "./HeroSection.scss";
import whitecircle from '../../assets/patterns/white-circles.svg'
import rightArrow from '../../assets/patterns/right-arrow.svg'
import Button from "../Button/Button";


const HeroSection = () => {
  return (
    <div className="hero">
      <section className="hero-section">
        <h1>
          Scooter sharing <br /> mode simple
        </h1>
        <p>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
        <img src={whitecircle} alt="" />
        <Button>Get Scootin</Button>
      </section>
    </div>
  );
};

export default HeroSection;
