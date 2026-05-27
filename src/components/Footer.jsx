const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <h3>📦 ComboStash</h3>
          <p>
            India's trusted B2B supplier of curated stationery combo boxes for
            small retailers. Quality items. Wholesale prices. Delivered to your
            door.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">👤</a>
            <a href="#" aria-label="YouTube">▶️</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Our Combo Boxes</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#register">Register Your Shop</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Policies</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return & Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <p>📞 +91 98765 43210</p>
          <p>📧 orders@combostash.com</p>
          <p>📍 123 Commerce Street, Wholesale District, Mumbai 400001</p>
          <p>🕐 Mon–Sat, 9 AM – 6 PM</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2024 ComboStash. All rights reserved.</p>
        <p>
          Designed for retailers who want to stock smarter.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer