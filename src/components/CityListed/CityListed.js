import React from "react";
import "./CityListed.scss";
import Button from "../Button/Button";
import Reveal from "../Reveal/Reveal";

const CityListed = () => {
  return (
    <div className="city-listed">
      <Reveal>
        <h1>Your city not listed?</h1>
      </Reveal>
      <Reveal>
        <p>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
      </Reveal>
      <Reveal>
        <Button>Message Us</Button>
      </Reveal>
    </div>
  );
};

export default CityListed;
