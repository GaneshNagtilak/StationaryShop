import Cards from "./Cards";

const HowToOrder = () => {

  const steps = [
    {
      icon: "🖥️",
      title: "Order Online",
      desc: "Browse our combo boxes, add them to your cart, and place your order. You'll receive confirmation and tracking via email.",
    },
    {
      icon: "💬",
      title: "Order via WhatsApp",
      desc: "Send us your order list on WhatsApp. Our team will confirm availability and share a payment link.",
    },
    {
      icon: "📞",
      title: "Call Our Sales Team",
      desc: "Prefer talking to a person? Call us between 9 AM – 6 PM. We'll take your order over the phone.",
    },
    {
      icon: "🔄",
      title: "Recurring Orders",
      desc: "Need the same boxes every week or month? Set up a recurring order and never worry about restocking.",
    },
  ];
  return (
    <section className="how-to-order">
      <div className="container">
        <span className="section-badge">Multiple Ways</span>
        <h2 className="section-title center">
          Ordering Is <span className="highlight">Simple</span>
        </h2>
        <div className="order-methods__grid">
          <Cards divClass="order-method-card" spanClass="order-method-card__icon" list={steps} />
        </div>

        <div className="order-policies">
          <h3>Order Policies</h3>
          <div className="order-policies__grid">
            <div className="policy-item">
              <strong>📦 Minimum Order</strong>
              <p>5 boxes per order</p>
            </div>
            <div className="policy-item">
              <strong>💳 Payment Terms</strong>
              <p>Prepaid / COD / Credit (approved accounts)</p>
            </div>
            <div className="policy-item">
              <strong>⏰ Order Cutoff</strong>
              <p>Orders before 2 PM dispatched same day</p>
            </div>
            <div className="policy-item">
              <strong>🚚 Delivery Time</strong>
              <p>1–5 business days depending on location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder