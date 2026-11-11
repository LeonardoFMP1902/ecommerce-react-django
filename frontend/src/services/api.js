const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const getCategorias = async () => {
  const response = await fetch(`${API_BASE_URL}/categorias/`);
  if (!response.ok) throw new Error('Error al obtener categorías');
  return await response.json();
};

export const getProductos = async (categoriaId = null) => {
  let url = `${API_BASE_URL}/productos/`;
  if (categoriaId) {
    url += `?categoria=${categoriaId}`;
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener productos');
  return await response.json();
};