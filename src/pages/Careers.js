import React from "react";
import imageD from "../assets/images/careers-locations-hero-desktop.jpg";
import imageT from "../assets/images/careers-locations-hero-tablet.jpg";
import imageM from "../assets/images/careers-location-hero-mobile.jpg";
import LocationPicture from "../components/LocationPicture/LocationPicture";
import FeatureDetailRight from "../components/FeatureDetailRight/FeatureDetailRight.js";
import career from '../assets/images/join-us.jpg'
import Values from "../components/Values/Values";
import CardPack from "../components/CardPack/CardPack";
import Transition from "../components/Transition/Transition";

const Careers = () => {
  return (
    <div>
      <LocationPicture location="Careers" imageD={imageD} imageM={imageM} imageT={imageT}/>
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

export default Transition(Careers);
