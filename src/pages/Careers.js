import React from "react";
import image from "../assets/images/careers-locations-hero-desktop.jpg";
import LocationPicture from "../components/LocationPicture/LocationPicture";
import FeatureDetailRight from "../components/FeatureDetailRight/FeatureDetailRight.js";
import career from '../assets/images/join-us.jpg'
import Values from "../components/Values/Values";
import CardPack from "../components/CardPack/CardPack";

const Careers = () => {
  return (
    <div>
      <LocationPicture location="Careers" image={image} />
      <FeatureDetailRight
        paragraph="We're always looking for ambitious individuals to help us on our journey.If you're passionate about our mission to pride clean, accessible tansport to improve urban living we want to hear from you."
        heading="Care to join our mission?"
        image={career}
      />
      <Values heading="Why join us?"/>
      <CardPack/>
    </div>
  );
};

export default Careers;
