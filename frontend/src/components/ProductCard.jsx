import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
      <img 
        src={product.imagen || 'https://via.placeholder.com/150'} 
        alt={product.nombre} 
        className="h-40 object-contain mb-3 rounded"
      />
      <div>
        <span className="text-xs font-semibold uppercase bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {product.categoria_nombre || product.categoria}
        </span>
        <h3 className="font-bold text-lg mt-2">{product.nombre}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.descripcion}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold text-green-600">S/ {product.precio}</span>
        <span className="text-xs text-gray-500">Stock: {product.cantidad_disponible}</span>
      </div>
    </div>
  );
};