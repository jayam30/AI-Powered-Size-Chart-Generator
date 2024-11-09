import React from 'react';

const ProductRecommendation = ({ products }) => {
  return (
    <div className="space-y-4 p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold">Product Recommendations</h2>
      <ul className="space-y-2">
        {products.map((product, index) => (
          <li key={index} className="flex justify-between items-center p-2 border border-gray-300 rounded">
            <span>{product.name}</span>
            <span>{product.size}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRecommendation;
