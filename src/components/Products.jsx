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

export default Products