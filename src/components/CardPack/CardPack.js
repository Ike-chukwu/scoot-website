import React from "react";
import "./CardPack.scss";
import Button from "../Button/Button";
import Reveal from "../Reveal/Reveal";

const CardPack = () => {
  const data = [
    { title: "General Manager", city: "Jakarta", country: "Indonesia" },
    { title: "UI/UX Designer", city: "Yokohama", country: "Japan" },
    {
      title: "Blog Content Copywriter",
      city: "New York",
      country: "United States",
    },
    { title: "Graphic Designer", city: "New York", country: "United States" },
    { title: "Fleet Supervisor", city: "Jakarta", country: "Indonesia" },
    { title: "UX Analyst", city: "London", country: "United Kingdom" },
  ];

  return (
    <div className="pack">
      {data.map((item, index) => (
        <Reveal>
          <div className="card" key={index}>
            <div className="card-inner-left">
              <p className="title">{item.title}</p>
              <span className="find">
                {item.city}, {item.country}
              </span>
            </div>
            <Button>Apply</Button>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default CardPack;
