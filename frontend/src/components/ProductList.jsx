import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className="text-center text-gray-500 my-8">No se encontraron productos.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};