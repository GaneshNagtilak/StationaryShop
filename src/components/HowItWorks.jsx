import Cards from './Cards.jsx'

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: "🔍",
      title: "Browse & Choose",
      desc: "Explore our range of pre-packed combo boxes. Each box lists exactly what's inside — items, quantities, and the retail value your customers get.",
    },
    {
      step: "02",
      icon: "🛒",
      title: "Place Your Order",
      desc: "Order online or through our sales team. Minimum order starts at just 5 boxes. Flexible ordering for shops of every size.",
    },
    {
      step: "03",
      icon: "🚚",
      title: "Receive & Sell",
      desc: "We deliver to your doorstep. Unbox, place on your shelf, and start selling. Every box is designed to give you a healthy profit margin.",
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <span className="section-badge">Simple Process</span>
        <h2 className="section-title center">
          How It Works —{" "}
          <span className="highlight">3 Simple Steps</span>
        </h2>
        <p className="section-subtitle center">
          From browsing to selling — we've made the entire process effortless
          for you.
        </p>
        <div className="steps__grid">
          <Cards list={steps} divClass="step-card" spanClass="step-card__icon"/>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks