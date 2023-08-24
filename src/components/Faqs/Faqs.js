import React from "react";
import "./Faqs.scss";
import DropDown from "../DropDown/DropDown";
import Reveal from "../Reveal/Reveal";

const Faqs = () => {
  const firstFaqs = [
    {
      id: Math.random(),
      heading: "How do I download the app?",
      value:
        "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
    },
    {
      id: Math.random(),
      heading: "Can I find a nearby scoots?",
      value:
        "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.",
    },
    {
      id: Math.random(),
      heading: "Do I need a license to ride?",
      value:
        "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots..",
    },
  ];
  const secondFaqs = [
    {
      id: Math.random(),
      heading: "Should I wear a helmet?",
      value:
        "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
    },
    {
      id: Math.random(),
      heading: "How about the regulations?",
      value:
        "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
    },
    {
      id: Math.random(),
      heading: "What if I damage my scoot?",
      value:
        "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
    },
  ];

  return (
    <div className="faqs">
      <Reveal>
        {" "}
        <h1>faqs</h1>
      </Reveal>
      <Reveal>
        <div className="faqs-inner-content">
          <h2>How it works</h2>
          <div className="drop-down-pack">
            {firstFaqs.map((item, index) => (
              <DropDown
                key={index + item.id}
                heading={item.heading}
                value={item.value}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </Reveal>
      <div className="faqs-inner-content">
        <h2>Safe driving</h2>
        <div className="drop-down-pack">
          {secondFaqs.map((item, index) => (
            <DropDown
              key={index + item.id}
              heading={item.heading}
              value={item.value}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
