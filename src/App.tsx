import React from "react";
import Header from "./component/Header";
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css"; // Light modern theme
import "primereact/resources/primereact.min.css";         // Core CSS
import "primeicons/primeicons.css";                      // Icons
import "primeflex/primeflex.css";                        // Flex Utilities

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <section className="hero-section">
          <h1>Welcome to DryTreat</h1>
          <p>Discover the finest selection of premium dry fruits.</p>
          <button className="p-button p-button-lg p-button-primary">
            Shop Now
          </button>
        </section>
        <section className="products-section">
          <h2 className="section-title">Our Products</h2>
          <div className="p-grid p-justify-center p-align-center">
            <div className="p-col-12 p-md-4">
              <div className="p-card product-card">
                <img
                  src="https://via.placeholder.com/300x200?text=Almonds"
                  alt="Almonds"
                  className="product-image"
                />
                <h3>Almonds</h3>
                <p className="product-price">$10 / 100g</p>
                <button className="p-button p-button-sm p-button-secondary">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-col-12 p-md-4">
              <div className="p-card product-card">
                <img
                  src="https://via.placeholder.com/300x200?text=Cashews"
                  alt="Cashews"
                  className="product-image"
                />
                <h3>Cashews</h3>
                <p className="product-price">$12 / 100g</p>
                <button className="p-button p-button-sm p-button-secondary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <p>© 2024 DryTreat. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
