import React from 'react';
import ProductCard from '../components/ProductCard';

// Example product data
const products = [
  {
    id: 1,
    name: 'Classic Silver',
    price: 199,
    image: '/assets/watch1.jpg',
  },
  {
    id: 2,
    name: 'Luxury Gold',
    price: 299,
    image: '/assets/watch2.jpg',
  },
  {
    id: 3,
    name: 'Sporty Black',
    price: 249,
    image: '/assets/watch3.jpg',
  },
  {
    id: 4,
    name: 'Elegant Rose',
    price: 279,
    image: '/assets/watch4.jpg',
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
