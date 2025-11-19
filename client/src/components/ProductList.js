import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2 className="section-title">Top Products</h2>
      <div className="product-table">
        <div className="product-header">
          <div className="product-col">Product</div>
          <div className="product-col">Sales</div>
          <div className="product-col">Revenue</div>
        </div>
        {products.map((product) => (
          <div key={product.id} className="product-row">
            <div className="product-col product-name">{product.name}</div>
            <div className="product-col">{product.sales.toLocaleString()}</div>
            <div className="product-col product-revenue">
              ${product.revenue.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
