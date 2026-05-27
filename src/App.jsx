import React, { useState, createContext, useContext, useEffect } from "react";
import "./App.css";
import Stats from './components/Stats.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Pricing from './components/Pricing.jsx'
import HowToOrder from './components/HowToOrder.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

/* ───────── THEME CONTEXT ───────── */
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* ───────── THEME TOGGLE BUTTON ───────── */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

/* ───────── NAVBAR ───────── */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Products", href: "#products" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo">
          📦 <span>ComboStash</span>
        </a>

        <div className="navbar__right">
          <ThemeToggle />
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              className="navbar__cta"
              onClick={handleNavClick}
            >
              Register Shop
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

/* ───────── PRODUCTS ───────── */
const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Back-to-School",
    "Office",
    "Art & Craft",
    "Exam-Ready",
    "Gift Packs",
    "Mega Bulk",
  ];

  const products = [
    {
      id: 1,
      name: "Back-to-School Essentials Box",
      category: "Back-to-School",
      items: [
        "5x Blue Ballpoint Pens",
        "3x A5 Ruled Notebooks",
        "2x Erasers",
        "2x Sharpeners",
        "1x 15cm Ruler",
        "1x Glue Stick",
      ],
      totalItems: 14,
      retailValue: 320,
      price: 210,
      minOrder: 5,
      bestFor: "School-area shops",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Office Basics Combo",
      category: "Office",
      items: [
        "3x Black Gel Pens",
        "2x Sticky Note Pads",
        "1x Stapler Mini",
        "1x Tape Roll",
        "1x A4 File Folder",
        "1x Highlighter Set (3 colors)",
      ],
      totalItems: 10,
      retailValue: 450,
      price: 299,
      minOrder: 5,
      bestFor: "Office supply stores",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Kids Art & Craft Pack",
      category: "Art & Craft",
      items: [
        "1x Crayon Box (12 colors)",
        "1x Sketch Pen Set (12 colors)",
        "2x Drawing Books",
        "1x Glue Stick",
        "1x Safety Scissors",
        "1x Watercolor Set",
      ],
      totalItems: 7,
      retailValue: 520,
      price: 349,
      minOrder: 5,
      bestFor: "Bookstores, gift shops",
      badge: "New",
    },
    {
      id: 4,
      name: "Exam-Ready Kit",
      category: "Exam-Ready",
      items: [
        "5x Blue Pens",
        "3x Pencils (HB)",
        "2x Erasers",
        "1x Sharpener",
        "1x 15cm Scale",
        "1x Geometry Box",
      ],
      totalItems: 13,
      retailValue: 280,
      price: 185,
      minOrder: 10,
      bestFor: "Near-school shops",
      badge: "Seasonal",
    },
    {
      id: 5,
      name: "Premium Gift Stationery Box",
      category: "Gift Packs",
      items: [
        "1x Premium Diary (A5)",
        "1x Metal Pen Set (2 pens)",
        "1x Bookmark Set",
        "1x Sticky Flags Pack",
        "1x Desk Organizer Mini",
      ],
      totalItems: 6,
      retailValue: 750,
      price: 480,
      minOrder: 3,
      bestFor: "Gift shops, bookstores",
      badge: "Premium",
    },
    {
      id: 6,
      name: "Mega Bulk School Pack",
      category: "Mega Bulk",
      items: [
        "20x Blue Pens",
        "10x Pencils",
        "10x Erasers",
        "10x Sharpeners",
        "5x Notebooks (A5)",
        "5x Rulers",
        "5x Glue Sticks",
      ],
      totalItems: 65,
      retailValue: 1200,
      price: 750,
      minOrder: 3,
      bestFor: "High-volume shops",
      badge: "Value Pack",
    },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="products">
      <div className="container">
        <span className="section-badge">Our Range</span>
        <h2 className="section-title center">
          Stationery <span className="highlight">Combo Boxes</span>
        </h2>
        <p className="section-subtitle center">
          Each combo box is thoughtfully curated with a mix of stationery items
          your customers need. All boxes are sold at wholesale rates — not
          available for individual item purchase.
        </p>

        <div className="products__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              {product.badge && (
                <span className="product-card__badge">{product.badge}</span>
              )}
              <div className="product-card__header">
                <div className="product-card__icon">📦</div>
                <h3>{product.name}</h3>
                <span className="product-card__category">
                  {product.category}
                </span>
              </div>
              <div className="product-card__items">
                <h4>What's Inside ({product.totalItems} items):</h4>
                <ul>
                  {product.items.map((item, i) => (
                    <li key={i}>✦ {item}</li>
                  ))}
                </ul>
              </div>
              <div className="product-card__pricing">
                <div className="product-card__prices">
                  <div className="product-card__retail">
                    <span className="label">Retail Value</span>
                    <span className="value strikethrough">
                      ₹{product.retailValue}
                    </span>
                  </div>
                  <div className="product-card__wholesale">
                    <span className="label">Your Price</span>
                    <span className="value price-highlight">
                      ₹{product.price}
                    </span>
                  </div>
                </div>
                <div className="product-card__savings">
                  You save{" "}
                  {Math.round(
                    ((product.retailValue - product.price) /
                      product.retailValue) *
                    100
                  )}
                  %
                </div>
              </div>
              <div className="product-card__meta">
                <span>📦 Min order: {product.minOrder} boxes</span>
                <span>🏪 Best for: {product.bestFor}</span>
              </div>
              <div className="product-card__actions">
                <button className="btn btn--primary btn--full">
                  Add to Order
                </button>
                <button className="btn btn--outline btn--full">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="products__notice">
          <p>
            ⚠️ We sell combo boxes only — individual items are not available for
            separate purchase. All prices are wholesale/trade prices and are
            available only to registered retailers.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ───────── FAQ ───────── */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can I buy individual stationery items instead of combo boxes?",
      a: "No. We only sell pre-curated combo boxes. This allows us to keep prices low and operations efficient.",
    },
    {
      q: "Who can buy from you?",
      a: "We sell to small retail shops, general stores, bookstores, school supply stores, and other resellers. We do not sell to individual consumers.",
    },
    {
      q: "What is the minimum order?",
      a: "5 boxes per order. No maximum limit. The more you order, the better the discounts.",
    },
    {
      q: "Can I customize a combo box with specific items?",
      a: "Currently, we offer standard pre-curated combos. However, for bulk orders above 100 boxes, we can discuss custom combos. Contact our sales team.",
    },
    {
      q: "What brands are inside the combo boxes?",
      a: "We source from well-known stationery brands as well as reliable white-label items that meet our strict quality standards.",
    },
    {
      q: "How are your prices so low?",
      a: "We buy directly from manufacturers in bulk. By combining items into combos and selling in volume, we cut out middlemen and pass the savings to you.",
    },
    {
      q: "What if an item in the box is defective?",
      a: "Report it within 48 hours of delivery with photos. We'll replace the box or issue a credit note for your next order.",
    },
    {
      q: "Do you offer credit terms?",
      a: "Yes, for verified retailers with a consistent order history. New customers start with prepaid or COD. Credit terms can be discussed after 5 successful orders.",
    },
    {
      q: "Can I return a combo box?",
      a: "Returns are accepted only for damaged or defective goods. We do not accept returns for change of mind since all box contents are clearly listed before purchase.",
    },
    {
      q: "Do you deliver to my area?",
      a: "We deliver across major cities in India. Enter your pincode on the checkout page to check delivery availability and estimated delivery time.",
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <span className="section-badge">Got Questions?</span>
        <h2 className="section-title center">
          Frequently Asked <span className="highlight">Questions</span>
        </h2>
        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div
              className={`faq__item ${openIndex === i ? "faq__item--open" : ""}`}
              key={i}
            >
              <button
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="faq__icon">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <div className="faq__answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────── CONTACT ───────── */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry! Our team will contact you within 24 hours.");
    setFormData({ name: "", business: "", phone: "", email: "", city: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section-badge">Reach Out</span>
            <h2 className="section-title">
              Get in <span className="highlight">Touch</span>
            </h2>
            <p>
              Have questions, need a quote, or want to place a bulk order? Reach
              out through any of the channels below.
            </p>
            <div className="contact__details">
              <div className="contact__detail-item">
                <span className="contact__detail-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact__detail-item">
                <span className="contact__detail-icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact__detail-item">
                <span className="contact__detail-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>orders@combostash.com</p>
                </div>
              </div>
              <div className="contact__detail-item">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>123 Commerce Street, Wholesale District, Mumbai 400001</p>
                </div>
              </div>
              <div className="contact__detail-item">
                <span className="contact__detail-icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>Mon – Sat, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3>Send an Enquiry</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label>Business Name *</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Doe Stationery Store"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label>City / Area *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Mumbai, Maharashtra"
                required
              />
            </div>
            <div className="form-group">
              <label>Message / Order Query</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you need..."
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ───────── REGISTER ───────── */
const Register = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    shopName: "",
    gst: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    shopType: "",
    budget: "",
    source: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted! We'll verify and activate your account within 24 hours.");
  };

  return (
    <section id="register" className="register">
      <div className="container">
        <div className="register__wrapper">
          <div className="register__info">
            <span className="section-badge">Join Us</span>
            <h2 className="section-title">
              Register as a{" "}
              <span className="highlight">Retail Partner</span>
            </h2>
            <p>
              Join 500+ retailers who stock smarter with our combo boxes.
              Register your shop to access wholesale prices, place orders, and
              track deliveries.
            </p>
            <div className="register__benefits">
              <div className="register__benefit">
                <span>🎉</span>
                <p>Get a first-order discount code upon verification</p>
              </div>
              <div className="register__benefit">
                <span>📱</span>
                <p>Access your order history and reorder with one click</p>
              </div>
              <div className="register__benefit">
                <span>🔔</span>
                <p>Get notified about new combos and seasonal deals</p>
              </div>
              <div className="register__benefit">
                <span>💳</span>
                <p>Unlock credit terms after consistent ordering</p>
              </div>
            </div>
          </div>

          <form className="register__form" onSubmit={handleSubmit}>
            <h3>Shop Registration Form</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Owner's Full Name *</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Shop / Business Name *</label>
                <input
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>GST Number</label>
                <input
                  type="text"
                  name="gst"
                  value={formData.gst}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Shop Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Type of Shop *</label>
                <select
                  name="shopType"
                  value={formData.shopType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option>General Store</option>
                  <option>Bookstore</option>
                  <option>School Supplier</option>
                  <option>Gift Shop</option>
                  <option>Office Supplier</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Monthly Budget (approx.)</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option>Under ₹5,000</option>
                  <option>₹5,000 – ₹15,000</option>
                  <option>₹15,000 – ₹50,000</option>
                  <option>₹50,000+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>How did you hear about us?</label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option>Google Search</option>
                <option>Social Media</option>
                <option>Referral from another shop</option>
                <option>Sales representative</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Register My Shop
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ───────── MAIN APP ───────── */
const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <HowItWorks />
          <WhyChooseUs />
          <Products />
          <Pricing />
          <HowToOrder />
          <Testimonials />
          <FAQ />
          <Contact />
          <Register />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
};

export default App;