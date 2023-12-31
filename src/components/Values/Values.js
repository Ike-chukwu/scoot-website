import React from "react";
import "./Values.scss";
import tech from "../../assets/images/our-tech.jpg";
import integrity from "../../assets/images/our-integrity.jpg";
import community from "../../assets/images/our-community.jpg";
import Value from "./Value/Value";
import Reveal from "../Reveal/Reveal";

const Values = (props) => {
  return (
    <section className="values">
      <Reveal>
        {" "}
        <h1 className="heading-text">{props.heading}</h1>
      </Reveal>
      <Reveal>
        <div className="value-pack">
          <Value
            image={tech}
            number="01"
            heading="Our tech"
            text="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
          />
          <Value
            image={integrity}
            number="02"
            heading="Our integrity"
            text="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
          />
          <Value
            image={community}
            number="03"
            heading="Our community"
            text="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
          />
        </div>
      </Reveal>
    </section>
  );
};

export default Values;
