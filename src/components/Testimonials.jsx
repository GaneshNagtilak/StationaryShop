const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      shop: "Kumar Stationery House",
      city: "Jaipur",
      text: "I used to order from 5 different suppliers for my stationery section. Now I just order 3 combo boxes and my shelf is stocked for the week.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      shop: "Sharma Book Store",
      city: "Lucknow",
      text: "The combo boxes sell fast because customers love getting a bundle deal. And my margins are better than buying individual items.",
      rating: 5,
    },
    {
      name: "Mohammed Asif",
      shop: "Al-Firdous General Store",
      city: "Hyderabad",
      text: "Ordering is simple, delivery is on time, and I never had a quality complaint. Reliable partner for my shop.",
      rating: 5,
    },
    {
      name: "Anita Desai",
      shop: "Desai Gift Corner",
      city: "Pune",
      text: "The gift packs are always in demand during festivals. My customers love the variety and I love the profit margins!",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <span className="section-badge">Trusted by Retailers</span>
        <h2 className="section-title center">
          What Our Retailers <span className="highlight">Say</span>
        </h2>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-card__stars">
                {"⭐".repeat(t.rating)}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>
                    {t.shop}, {t.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials