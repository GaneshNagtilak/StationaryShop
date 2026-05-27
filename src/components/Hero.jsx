import React from "react";

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero__content">
      <span className="hero__badge">B2B Stationery Supplier</span>
      <h1 className="hero__title">
        Pre-Packed Stationery Combos —{" "}
        <span className="highlight">Ready for Your Shelves</span>
      </h1>
      <p className="hero__subtitle">
        We source, combine, and deliver curated stationery boxes so you don't
        have to deal with multiple suppliers. Bulk pricing. One invoice. Zero
        hassle.
      </p>
      <div className="hero__actions">
        <a href="#products" className="btn btn--primary">
          Browse Combo Boxes
        </a>
        <a href="#contact" className="btn btn--outline">
          Request a Quote
        </a>
      </div>
      <div className="hero__trust">
        <span>✅ 500+ Retailers Served</span>
        <span>✅ 50+ Combo Varieties</span>
        <span>✅ Free Shipping on Bulk</span>
      </div>
    </div>
    <div className="hero__visual">
      <div className="hero__box-illustration">
        <div className="floating-item item-1">✏️</div>
        <div className="floating-item item-2">📓</div>
        <div className="floating-item item-3">📎</div>
        <div className="floating-item item-4">📏</div>
        <div className="floating-item item-5">🖊️</div>
        <div className="hero__main-box">📦</div>
      </div>
    </div>
  </section>
);

export default Hero