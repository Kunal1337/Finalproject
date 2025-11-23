import React from 'react';
import ProductCard from '../components/ProductCard';

// Import images from src/assets so Vite resolves them correctly
import watch1 from '../assets/watch-1.jpg';
import watch2 from '../assets/watch-2.jpg';
import watch3 from '../assets/watch-3.jpg';
import watch4 from '../assets/watch-4.jpg';

// Example product data
const products = [
  {
    id: 1,
    name: 'Classic Silver',
    price: 199,
    image: watch1,
  },
  {
    id: 2,
    name: 'Luxury Gold',
    price: 299,
    image: watch2,
  },
  {
    id: 3,
    name: 'Stylish Black',
    price: 249,
    image: watch3,
  },
  {
    id: 4,
    name: 'Elegant Rose',
    price: 279,
    image: watch4,
  },
];

const Shop = () => {
  return (
    <div className="shop-page">
      <h1>Shop Our Collection</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
