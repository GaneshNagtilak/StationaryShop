import React from "react";

const Stats = () => {
  const stats = [
    { number: "500+", label: "Retailers Served" },
    { number: "50+", label: "Combo Varieties" },
    { number: "25+", label: "Cities Covered" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "20-40%", label: "Savings vs Individual" },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <div className="stats__item" key={i}>
              <span className="stats__number">{stat.number}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats