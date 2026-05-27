import Cards from './Cards.jsx'

const About = () => {
  const features =
    [
      { icon: "🎯", title: "Simplicity", desc: "We remove sourcing complexity." },
      { icon: "🤝", title: "Fairness", desc: "Transparent pricing, no hidden charges." },
      { icon: "⚡", title: "Reliability", desc: "Consistent quality & on-time delivery." },
      { icon: "💼", title: "Partnership", desc: "Your success is our success." },
    ];
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-badge">About Us</span>
            <h2 className="section-title">
              We Make Stationery Stocking{" "}
              <span className="highlight">Simple for Small Retailers</span>
            </h2>
            <p>
              ComboStash was founded with a single idea — small shop owners
              shouldn't have to deal with the complexity of sourcing stationery
              from dozens of suppliers.
            </p>
            <p>
              We work directly with manufacturers and distributors to source
              quality stationery items — pens, pencils, notebooks, erasers,
              sharpeners, rulers, markers, glue sticks, files, tape rolls, and
              more. We then curate these into smartly packed combo boxes, designed
              to match what customers actually buy together.
            </p>
            <p>
              Our combo boxes are priced at wholesale rates, so retailers get a
              better margin than sourcing items individually. Every box is
              quality-checked, neatly packed, and delivered to your doorstep.
            </p>
            <div className="about__values">
              <Cards list={features} divClass="about__value-card" spanClass="about__value-icon" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
