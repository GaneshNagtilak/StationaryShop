const Pricing = () => (
  <section id="pricing" className="pricing">
    <div className="container">
      <span className="section-badge">Transparent Pricing</span>
      <h2 className="section-title center">
        The More You Order,{" "}
        <span className="highlight">The More You Save</span>
      </h2>
      <p className="section-subtitle center">
        All our combo boxes are priced at wholesale rates — significantly below
        what you'd pay sourcing items individually.
      </p>

      <div className="pricing__tiers">
        {[
          {
            tier: "Starter",
            range: "5–25 boxes",
            discount: "Standard wholesale price",
            icon: "🟢",
            features: [
              "Access to all combo boxes",
              "Standard delivery (3-5 days)",
              "Email & WhatsApp support",
              "Prepaid / COD payment",
            ],
          },
          {
            tier: "Growth",
            range: "26–50 boxes",
            discount: "Extra 5% off",
            icon: "🔵",
            popular: true,
            features: [
              "Everything in Starter",
              "Priority delivery (1-3 days)",
              "Dedicated sales contact",
              "Credit terms available",
              "Monthly order scheduling",
            ],
          },
          {
            tier: "Bulk",
            range: "51–100 boxes",
            discount: "Extra 10% off",
            icon: "🟣",
            features: [
              "Everything in Growth",
              "Express delivery (1-2 days)",
              "Custom combo requests",
              "Extended credit (30 days)",
              "Quarterly price lock-in",
            ],
          },
          {
            tier: "Enterprise",
            range: "100+ boxes",
            discount: "Custom quote",
            icon: "🟠",
            features: [
              "Everything in Bulk",
              "Dedicated account manager",
              "Fully custom combos",
              "Flexible payment terms",
              "Priority restocking",
              "Branding options available",
            ],
          },
        ].map((plan, i) => (
          <div
            className={`pricing__card ${plan.popular ? "pricing__card--popular" : ""}`}
            key={i}
          >
            {plan.popular && (
              <span className="pricing__popular-tag">Most Popular</span>
            )}
            <div className="pricing__card-icon">{plan.icon}</div>
            <h3>{plan.tier}</h3>
            <div className="pricing__range">{plan.range}</div>
            <div className="pricing__discount">{plan.discount}</div>
            <ul className="pricing__features">
              {plan.features.map((f, j) => (
                <li key={j}>✓ {f}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn--primary btn--full">
              {plan.tier === "Enterprise" ? "Contact Sales" : "Get Started"}
            </a>
          </div>
        ))}
      </div>

      <p className="pricing__note">
        Prices are subject to change based on supplier costs. Locked-in pricing
        is available for quarterly/annual contracts.
      </p>
    </div>
  </section>
);

export default Pricing