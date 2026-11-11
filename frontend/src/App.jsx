import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductList } from './components/ProductList';
import { getCategorias, getProductos } from './services/api';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategorias()
      .then(data => setCategories(data))
      .catch(err => setError(err.message));
  }, []);

  useEffect(() => {
    setLoading(true);
    getProductos(selectedCategory)
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            Error al conectar con la API: {error}
          </div>
        )}

        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        {loading ? (
          <p className="text-center text-gray-500 my-8">Cargando productos desde Django...</p>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </div>
  );
}

export default App;