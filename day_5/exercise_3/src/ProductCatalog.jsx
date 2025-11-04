import { useState } from "react";

function ProductCatalog() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("low-high");

  const products = [
    { id: 1, name: "Scarf", price: 25000, inStock: true, category: "Clothing" },
    { id: 2, name: "AirDryer", price: 15000, inStock: true, category: "Electronics" },
    { id: 3, name: "Straightener", price: 11000, inStock: false, category: "Electronics" },
    { id: 4, name: "Romper", price: 18000, inStock: true, category: "Clothing" },
    { id: 5, name: "Italian-pizza", price: 8000, inStock: false, category: "Food" },
  ];

  // Filter by category
  let filteredCat = products.filter((product) => {
    if (filter === "All") return true;
    return product.category.toLowerCase().includes(filter.toLowerCase());
  });

  // Sort by price
  const sortedPrice = [...filteredCat].sort((a, b) => {
    if (sortBy === "low-high") return a.price - b.price;
    if (sortBy === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="catalog">
      <h1>Product Catalog</h1>

      {/* Category filter */}
      <div>
        {["All", "Electronics", "Clothing", "Food"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            style={{
              borderRadius: "20px",
              border: filter === btn ? "none" : "1px solid blue",
              color: filter === btn ? "white" : "#163f70ff",
              backgroundColor: filter === btn ? "#163f70ff" : 'white',
              padding: "7px 14px",
              cursor: "pointer",
              fontWeight: "450",
              transition: "all 0.1s ease",
              marginRight: "8px",
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Sort buttons */}
      <div className="sort-buttons" style={{ marginTop: "10px" }}>
        <span>Sort by Price: </span>
        <button onClick={() => setSortBy("low-high")}>Low - High</button>
        <button onClick={() => setSortBy("high-low")}>High - Low</button>
      </div>

      {/* Product Lists */}
      {sortedPrice.length === 0 ? (
        <div className="empty-state">
          <p>Nothing found.</p>
        </div>
      ) : (
        <div className="product">
          {sortedPrice.map((product) => (
            <div key={product.id}>
              <p>
                {product.name} - ₦{product.price.toLocaleString()}
              </p>
              {product.inStock ? (
                <button>Add to Cart</button>
              ) : (
                <p className="out-of-stock">Out of stock</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCatalog;
