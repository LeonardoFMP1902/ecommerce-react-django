import React from 'react';

export const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-2 my-4 overflow-x-auto pb-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full text-sm ${
          selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-4 py-2 rounded-full text-sm ${
            selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {cat.nombre}
        </button>
      ))}
    </div>
  );
};