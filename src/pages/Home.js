import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Features from "../components/Features/Features";
import FeatureDetailRight from "../components/FeatureDetailRight/FeatureDetailRight";
import FeatureDetailLeft from "../components/FeatureDetailLeft/FeatureDetailLeft";
import telementry from "../../src/assets/images/telemetry.jpg";
import wilderness from "../../src/assets/images/near-you.jpg";
import cashier from "../../src/assets/images/payments.jpg";
import Transition from "../components/Transition/Transition";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <FeatureDetailRight
        paragraph="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        heading="Easy to use riding telementry"
        image={telementry}
      />
      <FeatureDetailLeft
        paragraph="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        heading="Coming to a city near you"
        image={wilderness}
      />
      <FeatureDetailRight
        image={cashier}
        paragraph="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        heading="Zero hassle payments"
      />
    </div>
  );
};

export default Transition(Home);
