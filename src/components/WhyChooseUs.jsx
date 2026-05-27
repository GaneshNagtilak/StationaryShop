import Cards from "./Cards";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "📦",
      title: "Pre-Curated Combos",
      desc: "No need to source pens, notebooks, erasers, and rulers separately. We do the bundling for you.",
    },
    {
      icon: "💰",
      title: "Wholesale Pricing",
      desc: "We buy in bulk from manufacturers and pass on deep discounts to you.",
    },
    {
      icon: "✅",
      title: "Consistent Quality",
      desc: "Every item in our combo is quality-checked before packing.",
    },
    {
      icon: "📐",
      title: "Flexible Box Sizes",
      desc: "Whether you run a small corner shop or a chain, we have box sizes that fit your needs.",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      desc: "Most orders are dispatched within 24–48 hours across our service area.",
    },
    {
      icon: "📋",
      title: "No Single-Piece Headaches",
      desc: "Stop managing 15 different suppliers. One order, one box, one invoice.",
    },
  ];

  return (
    <section className="why-us">
      <div className="container">
        <span className="section-badge">Our Advantages</span>
        <h2 className="section-title center">
          Why Retailers <span className="highlight">Trust Us</span>
        </h2>
        <div className="why-us__grid">
          <Cards list={reasons} divClass="why-us__card" spanClass="why-us__icon" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs