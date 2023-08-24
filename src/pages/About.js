import React from "react";
import LocationPicture from "../components/LocationPicture/LocationPicture";
import imageD from "../assets/images/about-hero-desktop.jpg";
import imageM from "../assets/images/about-hero-mobile.jpg";
import imageT from "../assets/images/about-hero-tablet.jpg";
import digital from "../assets/images/digital-era.jpg";
import living from "../assets/images/better-living.jpg";
import FeatureDetailRight from "../components/FeatureDetailRight/FeatureDetailRight";
import FeatureDetailLeft from "../components/FeatureDetailLeft/FeatureDetailLeft";
import Values from "../components/Values/Values";
import Faqs from "../components/Faqs/Faqs";
import Transition from "../components/Transition/Transition";

const About = () => {
  return (
    <div>
      <LocationPicture location="About" imageD={imageD} imageT={imageT} imageM={imageM} />
      <FeatureDetailRight
        paragraph="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
        heading="Mobility for the digital era"
        image={digital}
      />
      <FeatureDetailLeft
        paragraph="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
        heading="Better urban living"
        image={living}
      />
      <Values heading="Our values"/>
      <Faqs/>
    </div>
  );
};

export default Transition(About);
