import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

const Products = ({ setCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://39.61.51.195:8007/api/products/"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="product-cont">
        <div className="left-cont">
        <div className="filter-section">
  <h4>All Categories</h4>
  <div className="filter-group">
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={handleSearchChange}
    />
  </div>
  <h4>Brands</h4>
  <div className="brands">
    <input
      type="checkbox"
      id="vehicle1"
      name="vehicle1"
      value="Bike"
    />
    <label htmlFor="vehicle1">Brand-1</label>
    <br/>
    <input
      type="checkbox"
      id="vehicle2"
      name="vehicle2"
      value="Car"
    />
    <label htmlFor="vehicle1">Brand-2</label>
    <br/>
    <input
      type="checkbox"
      id="vehicle2"
      name="vehicle2"
      value="Car"
    />
    <label htmlFor="vehicle1">Brand-3</label>
    <br/>
    <input
      type="checkbox"
      id="vehicle2"
      name="vehicle2"
      value="Car"
    />
    <label htmlFor="vehicle1">Brand-4</label>
  </div>
  <h4>Colors</h4>
  <div className="color-container">
  <div className="color-box color-1"></div>
  <div className="color-box color-2"></div>
  <div className="color-box color-3"></div>
  <div className="color-box color-4"></div>
  <div className="color-box color-5"></div>
  <div className="color-box color-6"></div>
  <div className="color-box color-7"></div>
  <div className="color-box color-8"></div>
  <div className="color-box color-9"></div>
  <div className="color-box color-10"></div>
  <div className="color-box color-11"></div>
  <div className="color-box color-12"></div>
</div> 
<br/>
  <h4>Size</h4>
  <div className="color-container">
  <div className="size-box">S</div>
  <div className="size-box">M</div>
  <div className="size-box">L</div>
  <div className="size-box">XS</div>
  <div className="size-box">XM</div>
  <div className="size-box">XL</div>
  <div className="size-box">2XL</div>
  <div className="size-box">3XL</div>
</div>
<br/>
  <h4>Price</h4>
  <div className="color-container">
  <div className="price-box">$ 10</div> -
  <div className="price-box">$ 1000</div>
  <div class="slidecontainer">
  <input type="range" min="1" max="100" value="50"/>
  
</div>
  
</div>

</div>

        </div>
        <div className="right-cont">
          {filteredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <img
                  src={`http://39.61.51.195:8007${product.image}`}
                  className="prd-img card-img-top"
                  alt={product.name}
                  onError={(e) =>
                    (e.target.src = "path/to/placeholder/image.jpg")
                  } // Fallback image
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="star-rating">
                    {[...Array(5)].map((star, index) => (
                      <span
                        key={index}
                        className="fa fa-star checked"
                        style={{ color: "yellow" }}
                      ></span>
                    ))}
                  </div>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text">
                    Stock: {product.stock ? "Available" : "Out of Stock"}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.stock}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
