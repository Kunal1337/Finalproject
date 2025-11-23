import React from 'react';
import { Link } from 'react-router-dom';

import watch1 from '../assets/watch-1.jpg';
import watch2 from '../assets/watch-2.jpg';
import watch3 from '../assets/watch-3.jpg';

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Timeless Watches, Delivered Worldwide</h1>
          <p>Discover our collection of premium watches that combine style, precision, and craftsmanship.</p>
          <Link to="/shop" className="btn">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Watches</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src={watch1} alt="Watch 1" />
            <h3>Classic Silver</h3>
            <p>$199</p>
            <Link to="/shop" className="btn-small">Buy Now</Link>
          </div>
          <div className="product-card">
            <img src={watch2} alt="Watch 2" />
            <h3>Luxury Gold</h3>
            <p>$299</p>
            <Link to="/shop" className="btn-small">Buy Now</Link>
          </div>
          <div className="product-card">
            <img src={watch3} alt="Watch 3" />
            <h3>Sporty Black</h3>
            <p>$249</p>
            <Link to="/shop" className="btn-small">Buy Now</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Stay Stylish, Stay on Time</h2>
        <p>Sign up for our newsletter and get exclusive offers on new arrivals.</p>
        <Link to="/shop" className="btn">Shop the Collection</Link>
      </section>

    </div>
  );
};

export default Home;
